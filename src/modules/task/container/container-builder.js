import concreteContainer from './container-concreter';
import {getRandomArrayElement} from '../../../assets/handler';

export default (task, numValue, tasksContainer) => {

  const {colors} = task;
  const randomColor = getRandomArrayElement([...new Set(colors)]);
  const containerMarkup = concreteContainer(randomColor, numValue);

  tasksContainer.insertAdjacentHTML(`beforeend`, containerMarkup);

  return tasksContainer.querySelector(`.card--${numValue}`);
};
