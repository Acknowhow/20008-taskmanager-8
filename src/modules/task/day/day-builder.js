import Day from './day-concreter';

export default (task, container) => {
  const {repeatingDays} = task;

  const dateContainer = container.querySelector(
    `.card__dates`);

  const day = new Day(repeatingDays);
  dateContainer.appendChild(day.render());

  return day;
};

