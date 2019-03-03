import {tasks, filters} from '../data/data';

import buildTask from './task/task-builder';
import buildFilter from './filter/filter-builder';

const section = document.querySelector(`.main__filter`);
const board = document.querySelector(`.board__tasks`);

export default () => {
  buildFilter(filters, section);
  buildTask(tasks, section, board);
};
