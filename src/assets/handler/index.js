import moment from 'moment';

export const getRandomIntInclusive = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

export const getFutureDateWithinWeek = () => {
  const timestamp = +Date.now()

  return new Date(getRandomIntInclusive(
      timestamp, timestamp + (7 * 24 * 60 * 60 * 1000)));
}

export const getDayAndMonth = (dateObject) => {
  return dateObject.toLocaleString(
      `en-GB`, {day: `numeric`, month: `long`});
};

export const getTime = (dateObject) => {
  return dateObject.toLocaleString(
      `en-GB`, {hour: `numeric`, minute: `numeric`, hour12: `true`});
};

export const getRandomArrayElement = (array) => {
  return array[getRandomIntInclusive(0, array.length - 1)];
};

export const getRandomSlicedArray = (tags) => {
  return tags.slice(0, getRandomIntInclusive(1, tags.length));
};

export const countFilters = (tasks, filterName) => {
  switch (filterName) {

    case `all`:
      return tasks;

    case `overdue`:
      return tasks.filter((it) => it.dueDate < Date.now());

    case `today`:
      return tasks.filter((it) => {
        const startOfDay = moment().startOf('day').format('x');
        const endOfDay = moment.endOf('day').format('x');

        return it.dueDate >= startOfDay && it.dueDate <= endOfDay;
      });

    case `repeating`:
      return tasks.filter((it) =>
        [...Object.entries(it.repeatingDays)].some((rec) => rec[1]))
  }
};
