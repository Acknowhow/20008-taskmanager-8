import concreteContainer from './container-concreter';
import {getRandomArrayElement} from "../../../assets/handler/handler";

export default (colors, numValue, tasksContainer) => {

  const randomColor = getRandomArrayElement([...new Set(colors)]);
  const containerMarkup = concreteContainer(randomColor, numValue);

  tasksContainer.insertAdjacentHTML(`beforeend`, containerMarkup);

  return tasksContainer.querySelector(`.card--${numValue}`);
};
