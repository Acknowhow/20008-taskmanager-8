import Day from './day-concreter';

export default (task, container) => {
  const {days} = task;

  const dateContainer = container.querySelector(
    `.card__dates`);
  const daysMap = new Map(Object.entries(days));

  const day = new Day(daysMap);
  dateContainer.appendChild(day.render());

  return day;
};

