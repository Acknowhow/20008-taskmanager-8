import getFilterMarkup from './filter-concreter';

export default (data, section) => {
  for (const it of data) {
    section.insertAdjacentHTML(
        `beforeend`, getFilterMarkup(
            {caption: it.name, amount: it.amount, state: it.state}));
  }
};
