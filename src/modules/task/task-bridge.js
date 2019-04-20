import API from '../../api'
import {manufacture, unrender, update} from '../../assets/factory';
import {updateDueDate} from '../../assets/handler';

import Container from './container/container-concreter';
import ContainerEdit from './container/container-edit-concreter';

import buildTitle from './title/title-builder';
import buildDeadline from './deadline/deadline-builder';
import buildDay from './day/day-builder';
import buildTag from './tag/tag-builder';
import buildPicture from './picture/picture-builder';
import buildColor from './color/color-builder';
import {getFiltersState} from '../../assets/handler';
import {filters} from '../../data';

const tasksContainer = document.querySelector(
  `.board__tasks`);

export default (filteredTasks, Api) => {

  const renderTasks = (updatedTasks = null) => {
    tasksContainer.innerHTML = ``;

    const activeTasks = updatedTasks || filteredTasks;

    for (let i = 0; i < activeTasks.length; i++) {
      const task = activeTasks[i];

      let producedTaskBuilders = [];
      let producedTaskEditBuilders = [];

      const {color, repeatingDays} = task;

      const container = new Container(color, repeatingDays);
      const containerEdit = new ContainerEdit(color, repeatingDays);

      const getContainer = () =>
        tasksContainer.appendChild(container.render());

      const taskBuilders = [
        buildTitle, buildTag, buildPicture
      ];

      const taskEditBuilders = [
        buildTitle, buildDeadline, buildDay, buildTag,
        buildPicture, buildColor
      ];

      producedTaskBuilders = manufacture(
        task, getContainer, task.id, ...taskBuilders);

      container.onEdit = () => {
        containerEdit.render();

        const getReplacedContainer = () => {
          tasksContainer.replaceChild(containerEdit.element, container.element);
          return containerEdit.element;
        };

        producedTaskEditBuilders = manufacture(
          task, getReplacedContainer, task.id, ...taskEditBuilders);

        unrender(...producedTaskBuilders);
        container.unrender();
      };

      containerEdit.onDelete = () => {

        Api.deleteTask(task.id)
          .then(() => Api.getTasks())
          .then((tasks) => renderTasks(tasks))
          .catch(alert);

      };

      containerEdit.onSubmit = (newData) => {
        const currentTimestamp = task.dueDate;

        task.dueDate = updateDueDate(
          {
            currentTimestamp,
            newDate: newData.date,
            newTime: newData.time
          });

        task.title = newData.title;
        task.color = newData.color;
        task.tags = newData.tags;
        task.repeatingDays = newData.repeatingDays;

        Api.updateTask({id: task.id, data: task.toRAW()})
          .then((newTask) => {
            update(newTask, ...producedTaskBuilders);
            update(newTask, ...producedTaskEditBuilders);
            container.update(newTask);
            containerEdit.update(newTask);
            container.render();

            const getReplacedContainerEdit = () => {
              tasksContainer.replaceChild(container.element, containerEdit.element);
              return container.element;
            };

            producedTaskBuilders = manufacture(
              newTask, getReplacedContainerEdit, newTask.id, ...taskBuilders);

            unrender(...producedTaskEditBuilders);
            containerEdit.unrender();
          })
      };
    }
  };

  renderTasks();
};


