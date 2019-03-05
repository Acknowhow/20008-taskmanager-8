import getFilterMarkup from './filter-concreter';

export default (filters, container) => {
  for (const it of filters) {
    container.insertAdjacentHTML(
        `beforeend`, getFilterMarkup(
            {caption: it.name, amount: it.amount, state: it.state}));
  }
};
