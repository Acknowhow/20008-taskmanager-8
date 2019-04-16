import {tasks, filters} from '../../data';
import {getFilteredTasks, getFiltersState} from '../../assets/handler';

import buildFilter from '../filter/filter-builder';
import bridgeTask from './task-bridge';

const searchContainer = document.querySelector(
    `.main__search`);


export default () => {
  const filterContainer = buildFilter(
    getFiltersState(tasks, filters), searchContainer);

  filterContainer.onFilter = (target) => {
    const filteredTasks = getFilteredTasks(tasks, target);

    bridgeTask(filteredTasks);
  }

};


