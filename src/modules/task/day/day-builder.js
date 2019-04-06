import Day from './day-concreter';

export default (task, container) => {
  const {days} = task;

  const dateContainer = container.querySelector(
    `.card__dates`);

  const day = new Day(days);
  dateContainer.appendChild(day.render());

  return day;
};

