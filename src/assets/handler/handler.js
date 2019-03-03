export const getRandomIntInclusive = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

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
  return tags.slice(0, getRandomIntInclusive(0, tags.length));
};
