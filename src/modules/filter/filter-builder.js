import {filters} from '../../data/data';
import getFilterMarkup from './filter-concreter';

export const section = document.querySelector(`.main__filter`);

export default () => {
  for (const it of filters) {
    section.insertAdjacentHTML(
        `beforeend`, getFilterMarkup(
            {caption: it.name, amount: it.amount, state: it.state}));
  }
};
