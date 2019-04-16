import {tasks, filters} from '../../data';
import {manufacture, unrender, update} from '../../assets/factory';
import {getFiltersState} from '../../assets/handler';

import Container from './container/container-concreter';
import ContainerEdit from './container/container-edit-concreter';
import buildFilter from '../filter/filter-builder';

import buildTitle from './title/title-builder';
import buildDeadline from './deadline/deadline-builder';
import buildDay from './day/day-builder';
import buildTag from './tag/tag-builder';
import buildPicture from './picture/picture-builder';
import buildColor from './color/color-builder';

const searchContainer = document.querySelector(
    `.main__search`);
const tasksContainer = document.querySelector(
    `.board__tasks`);

export default () => {

  buildFilter(getFiltersState(tasks, filters), searchContainer);

  const renderTasks = () => {
    const filteredTasks = tasks.filter((it) => it.isDeleted !== true);
    tasksContainer.innerHTML = ``;

    for (let i = 0; i < filteredTasks.length; i++) {
      const task = filteredTasks[i];

      let producedTaskBuilders = [];
      let producedTaskEditBuilders = [];

      const {color, days} = task;

      const container = new Container(color, days);
      const containerEdit = new ContainerEdit(color, days);

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
        task.isDeleted = true;
        renderTasks();
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


