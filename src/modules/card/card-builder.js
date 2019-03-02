import {section} from '../filter/filter-builder';
import {insert} from '../../helpers/insert';
import {articles} from '../../data/data';

const board = document.querySelector(`.board__tasks`);

export default () => {
  section.addEventListener(`click`, (e) => {
    const {target} = e;

    if (target.tagName.toUpperCase() === `LABEL`) {
      insert(articles, board);
    }
  });
};

