import concreteDay from './day-concreter';

export default (daysObject, container) => {
  const dayContainer = container.querySelector(
    `.card__repeat-days-inner`)
  const daysMap = new Map(Object.entries(daysObject))

  for (const [key, value] of daysMap) {
    dayContainer.insertAdjacentHTML(
        `beforeend`, concreteDay(key, value));
  }
};

