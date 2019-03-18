import concreteDay from './day-concreter';

export default (task, container) => {
  const {days} = task;

  const dayContainer = container.querySelector(
    `.card__repeat-days-inner`)
  const daysMap = new Map(Object.entries(days))

  for (const [key, value] of daysMap) {
    dayContainer.insertAdjacentHTML(
        `beforeend`, concreteDay(key, value));
  }
};

