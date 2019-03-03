import concreteDay from './day-concreter';

export default (daysObject, container) => {
  const daysMap = new Map(Object.entries(daysObject))

  for (const [key, value] of daysMap) {
    container.insertAdjacentHTML(
        `beforeend`, concreteDay(key, value));
  }
};

