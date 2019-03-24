import concreteTitle from './title-concreter';
import {getRandomArrayElement} from '../../../assets/handler';

export default (task, container) => {
  const {titles} = task;
  const titleContainer = container.querySelector(
    `.card__textarea-wrap`)

  const randomTitle = getRandomArrayElement(titles);
  titleContainer.insertAdjacentHTML(
      `beforeend`, concreteTitle(randomTitle));

  // const title = new Title(data);
  // titleContainer.insertAdjacent(...)
  // return title;
};
