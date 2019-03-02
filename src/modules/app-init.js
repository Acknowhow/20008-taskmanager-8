import {articles, filters} from '../data/data';

import buildCard from './card/card-builder';
import buildFilter from './filter/filter-builder';

const section = document.querySelector(`.main__filter`);
const board = document.querySelector(`.board__tasks`);

export default () => {
  buildFilter(filters, section);
  buildCard(articles, section, board);
};
