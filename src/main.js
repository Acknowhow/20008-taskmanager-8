'use strict';
const section = document.querySelector(`.main__filter`);

const filters = [
  {
    name: `All`,
    amount: 15,
    state: `checked`
  },
  {
    name: `Overdue`,
    amount: 0,
    state: `disabled`
  },
  {
    name: `Today`,
    amount: 0,
    state: `disabled`
  },
  {
    name: `Favourites`,
    amount: 7,
    state: false
  },
  {
    name: `Repeating`,
    amount: 2,
    state: false
  },
  {
    name: `Tags`,
    amount: 6,
    state: false
  },
  {
    name: `Archive`,
    amount: 115,
    state: false
  }
];

const getFilterMarkup = (filterParams = {}) => {
  return `<input
          type="radio"
          id="filter__${filterParams.caption.toLowerCase()}"
          class="filter__input visually-hidden"
          name="filter"
          ${filterParams.state ? ` ${filterParams.state}` : ``}
        />
        <label for="filter__${filterParams.caption.toLowerCase()}" class="filter__label">
          ${filterParams.caption.toUpperCase()} <span class="filter__all-count">${filterParams.amount}</span></label
        >`;
};

filters.map((it) => section.insertAdjacentHTML(
    `beforeend`, getFilterMarkup(
        {caption: it.name, amount: it.amount, state: it.state})));
