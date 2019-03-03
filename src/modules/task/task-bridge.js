import {task, filters} from '../../data/data';
import {getRandomIntInclusive} from '../../assets/handler/handler';

import buildFilter from '../filter/filter-builder';
import buildContainer from './container/container-builder';
import buildTitle from './title/title-builder';
import buildDeadline from './deadline/deadline-builder';
import buildDay from './day/day-builder';
import buildTag from './tag/tag-builder';
import buildPicture from './picture/picture-builder';
import buildColor from './color/color-builder';

const {
  colors, titles, dueDate, days, tags, picture
} = task;

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

        const taskContainer = buildContainer(
          colors, randomNumber, tasksContainer);

        buildTitle(titles, taskContainer);
        buildDeadline(dueDate, taskContainer);
        buildDay(days, taskContainer);
        buildTag(tags, taskContainer);
        buildPicture(picture(), taskContainer);
        buildColor(colors, taskContainer);

        randomNumber--;
      }
    }
  });
};


