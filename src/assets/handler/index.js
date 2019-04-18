import moment from 'moment';

export const getRandomIntInclusive = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

export const getCurrentWeekDays = () => {
  const weekStart = moment().startOf(`week`);
  const weekEnd = moment().endOf(`week`).add(1, `millisecond`);

  const days = weekEnd.diff(weekStart, `days`);
  const array = [];

  for (let i = 1; i <= days; i++) {
    array.push(weekStart.day(i).format(`YYYY-MM-DD`));
  }
  return array;
};

export const getDays = (dateStart, dateEnd) => {
  const dateStartDay = moment(dateStart).startOf(`day`);
  const dateEndDay = moment(dateEnd).endOf(`day`).add(1, `millisecond`);
  const days = dateEndDay.diff(dateStartDay, `days`);

  const array = [];

  for (let i = 1; i <= days; i++) {
    array.push(dateStartDay.day(i).format(`YYYY-MM-DD`));
  }

  return array;
};

export const getDailyTasks = (days, tasks) => {
  const array = [];
  days.map((day) => {

    tasks.map((task) => {
      const startOfDay = moment(day).startOf(`day`).format(`x`);
      const endOfDay = moment(day).endOf(`day`).format(`x`);

      if (task.dueDate >= startOfDay && task.dueDate <= endOfDay) {
        array.push(moment(task.dueDate).format(`MMM-D`));
      }
    });
  });
  return array;
};

export const getDailyTasksCounted = (dailyTasks) => {
  return dailyTasks.reduce((accumulator, currentValue) => {

    if (currentValue in accumulator) {
      accumulator[currentValue]++;

    } else {
      accumulator[currentValue] = 1;
    }

    return accumulator;
  }, {});
};

export const getRandomArrayElement = (array) => {
  return array[getRandomIntInclusive(0, array.length - 1)];
};

export const getRandomSlicedArray = (tags) => {
  return tags.slice(0, getRandomIntInclusive(1, tags.length));
};

const getOverdueTasks = (tasks) => {
  return tasks.filter((it) => it.dueDate < Date.now());
};

const getTodayTasks = (tasks) => {
  return tasks.filter((it) => {
    const startOfDay = moment().startOf(`day`).format(`x`);
    const endOfDay = moment().endOf(`day`).format(`x`);

    return it.dueDate >= startOfDay && it.dueDate <= endOfDay;
  });
};


const getRepeatingTasks = (tasks) => {
  return tasks.filter((it) => {
    return [...Object.entries(it.days)].some((rec) => rec[1]);
  });
};

export const getFilteredTasks = (tasks, filterName) => {
  const filterNameToLowerCase = filterName.toLowerCase();

  switch (filterNameToLowerCase) {
    case `overdue`:
      return getOverdueTasks(tasks);

    case `today`:
      return getTodayTasks(tasks);

    case `repeating`:
      return getRepeatingTasks(tasks);

    default:
      return tasks;
  }
};

export const getFiltersState = (tasks, filters) => {
  return filters.map((it) => {

    const filterNameToLowerCase = it.name.toLowerCase();

    switch (filterNameToLowerCase) {
      case `overdue`:
        it.count = getOverdueTasks(tasks).length;
        it.state = it.count > 0 ? `` : false;
        return it;

      case `today`:
        it.count = getTodayTasks(tasks).length;
        it.state = it.count > 0 ? `` : false;
        return it;

      case `repeating`:
        it.count = getRepeatingTasks(tasks).length;
        it.state = it.count > 0 ? `` : false;
        return it;

      default:
        it.count = tasks.length;
        it.state = it.count > 0 ? `` : false;
        return it;
    }
  });
};
