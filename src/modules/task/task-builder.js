import {task, filters} from '../../data';

import {getRandomArrayElement} from '../../assets/handler';
import {manufacture, unrender} from '../../assets/factory';

import Container from './container/container-concreter';
import ContainerEdit from './container/container-edit-concreter';
import buildFilter from '../filter/filter-builder';

import buildTitle from './title/title-builder';
import buildDeadline from './deadline/deadline-builder';
import buildDay from './day/day-builder';
import buildTag from './tag/tag-builder';
import buildPicture from './picture/picture-builder';
import buildColor from './color/color-builder';

const filterContainer = document.querySelector(
    `.main__filter`);
const tasksContainer = document.querySelector(
    `.board__tasks`);

export default () => {
  buildFilter(filters, filterContainer);

  filterContainer.addEventListener(`click`, (e) => {
    const {target} = e;

    if (target.tagName.toUpperCase() === `LABEL`) {
      let producedTaskBuilders;
      let producedTaskEditBuilders;

      const {colors, days} = task;
      const randomColor = getRandomArrayElement([...new Set(colors)]);

      const container = new Container(randomColor, days);
      const containerEdit = new ContainerEdit(randomColor, days);

      const getContainer = () => tasksContainer.appendChild(container.render());

      const taskBuilders = [
        buildTitle, buildTag, buildPicture
      ];

      const taskEditBuilders = [
        buildTitle, buildDeadline, buildDay, buildTag,
        buildPicture, buildColor
      ];

      producedTaskBuilders = manufacture(task, getContainer, ...taskBuilders);

      container.onEdit = () => {
        containerEdit.render();

        const getReplacedContainer = () => {
          tasksContainer.replaceChild(containerEdit.element, container.element);
          return containerEdit.element;
        };

        producedTaskEditBuilders = manufacture(
            task, getReplacedContainer, ...taskEditBuilders);

        unrender(...producedTaskBuilders);
        container.unrender();
      };

      containerEdit.onSubmit = (newData) => {

        container.render();

        const getReplacedContainerEdit = () => {
          tasksContainer.replaceChild(container.element, containerEdit.element);
          return container.element;
        };

        producedTaskBuilders = manufacture(
            task, getReplacedContainerEdit, ...taskBuilders);

        unrender(...producedTaskEditBuilders);
        containerEdit.unrender();
      };
    }
  });
};


