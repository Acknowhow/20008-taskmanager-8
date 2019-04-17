import flatpickr from 'flatpickr';
import {daysChart, tagsChart, colorChart} from '../../assets/chart';
import {tasks, filters} from '../../data';
import {getFilteredTasks, getFiltersState} from '../../assets/handler';

import buildFilterContainer from '../filter/container/container-builder';

import bridgeTask from './task-bridge';

const searchContainer = document.querySelector(
    `.main__search`);

const controls = document.querySelector(
    `.control__btn-wrap`);

const statistic = document.querySelector(
    `.statistic`);

const daysCtx = statistic.querySelector(`.statistic__days`);
const tagsCtx = statistic.querySelector(`.statistic__tags`);
const colorsCtx = statistic.querySelector(`.statistic__colors`);

const dateInput = statistic.querySelector(`.statistic__period-input`);
const board = document.querySelector(`.board`);

export default () => {
  daysChart(daysCtx);
  tagsChart(tagsCtx);
  colorChart(colorsCtx);


  flatpickr(`.statistic__period-input`, {
    altInput: true, altFormat: `j F`, dateFormat: `Y-m-d`, mode: `range` });

  dateInput.addEventListener(`change`, (e) => {
    e.stopPropagation();
    const {target} = e;

    if (target.value.length > 10) {
      const dateStart = target.value.substring(0, 10);
      const dateEnd = target.value.substring(14, 24);

      console.log(dateStart);
    }
  });

  controls.addEventListener(`click`, (e) => {
    const {target} = e;

    if (target.tagName.toUpperCase() === `LABEL`) {
      const controlValue = target.attributes[`for`].nodeValue;
      if (controlValue === `control__statistic`) {

        statistic.classList.remove(`visually-hidden`);
        board.classList.add(`visually-hidden`);
      } else if (!statistic.classList.contains(`visually-hidden`)) {

        statistic.classList.add(`visually-hidden`);
      }
    }
  });

  const getActiveTasks = () => tasks.filter((it) => it.isDeleted !== true);

  const filterContainer = buildFilterContainer(searchContainer,
    getFiltersState(getActiveTasks(), filters));

  filterContainer.onFilter = (target) => {

    if (board.classList.contains(`visually-hidden`)) {
      board.classList.remove(`visually-hidden`);
    }

    if (!statistic.classList.contains(`visually-hidden`)) {
      statistic.classList.add(`visually-hidden`);
    }

    filterContainer.update(getFiltersState(getActiveTasks(), filters), target);

    bridgeTask(getFilteredTasks(getActiveTasks(), target));
  };
};


