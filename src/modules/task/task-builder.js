import {task, filters} from '../../data';
import {getRandomArrayElement} from '../../assets/handler';
import {factorize} from '../../assets/factory';

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

      const {colors} = task;
      const randomColor = getRandomArrayElement([...new Set(colors)]);

      const container = new Container(randomColor);
      const containerEdit = new ContainerEdit(randomColor);

      const getContainer = () => tasksContainer.appendChild(container.render());

      factorize(task, getContainer, buildTitle,
          buildDeadline, buildDay, buildTag, buildPicture,
          buildColor);


      container.onEdit = () => {
        containerEdit.render();

        const getReplacedContainer = () => {
          tasksContainer.replaceChild(containerEdit.element, container.element);
          return containerEdit.element;
        };

        factorize(task, getReplacedContainer, buildTitle,
            buildDeadline, buildDay, buildTag, buildPicture,
            buildColor);

        container.unrender();
      };

      containerEdit.onSubmit = () => {
        container.render();

        const getReplacedContainerEdit = () => {
          tasksContainer.replaceChild(container.element, containerEdit.element);
          return container.element;
        };


        factorize(task, getReplacedContainerEdit, buildTitle,
            buildDeadline, buildDay, buildTag, buildPicture,
            buildColor);

        containerEdit.unrender();
      };
    }
  });
};


