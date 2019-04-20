import API from '../../api'
import {manufacture, unrender, update} from '../../assets/factory';

import Container from './container/container-concreter';
import ContainerEdit from './container/container-edit-concreter';

import buildTitle from './title/title-builder';
import buildDeadline from './deadline/deadline-builder';
import buildDay from './day/day-builder';
import buildTag from './tag/tag-builder';
import buildPicture from './picture/picture-builder';
import buildColor from './color/color-builder';
import {getFiltersState} from "../../assets/handler";
import {filters} from "../../data";

const tasksContainer = document.querySelector(
  `.board__tasks`);

// const AUTHORIZATION = `Basic dXNlckBwYXNzd29yZAo=}`;
// const END_POINT = `https://es8-demo-srv.appspot.com/task-manager`;
//
// const Api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});

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

      producedTaskBuilders = manufacture(task, getContainer, i, ...taskBuilders);

      container.onEdit = () => {
        containerEdit.render();

        const getReplacedContainer = () => {
          tasksContainer.replaceChild(containerEdit.element, container.element);
          return containerEdit.element;
        };

        producedTaskEditBuilders = manufacture(
          task, getReplacedContainer, i, ...taskEditBuilders);

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

        task.title = newData.title;
        task.days = newData.days;
        task.color = newData.color;

        update(task, ...producedTaskBuilders);
        update(task, ...producedTaskEditBuilders);
        container.update(task);
        containerEdit.update(task);
        container.render();

        const getReplacedContainerEdit = () => {
          tasksContainer.replaceChild(container.element, containerEdit.element);
          return container.element;
        };

        producedTaskBuilders = manufacture(
          task, getReplacedContainerEdit, i, ...taskBuilders);

        unrender(...producedTaskEditBuilders);
        containerEdit.unrender();
      };
    }
  };

  renderTasks();
};


