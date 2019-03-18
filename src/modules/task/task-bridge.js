import {task, filters} from '../../data';
import {getRandomIntInclusive} from '../../assets/handler';
import {factorize} from '../../assets/factory';

import buildFilter from '../filter/filter-builder';
import buildContainer from './container/container-builder';
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
      let randomNumber;
      let tasksNumber = 6;

      randomNumber = getRandomIntInclusive(0, tasksNumber);
      tasksContainer.innerHTML = ``;

      while (randomNumber >= 0) {

        const taskContainer = () => buildContainer(
          task, randomNumber, tasksContainer);


        factorize(task, taskContainer, buildTitle,
          buildDeadline, buildDay, buildTag, buildPicture,
          buildColor);

        randomNumber--;
      }
    }
  });
};


