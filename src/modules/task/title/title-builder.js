import concreteTitle from './title-concreter';

import {getRandomArrayElement} from '../../../assets/handler/handler';

export default (titles, container) => {
  const titleContainer = container.querySelector(
    `.card__textarea-wrap`)

  const randomTitle = getRandomArrayElement(titles);
  titleContainer.insertAdjacentHTML(
      `beforeend`, concreteTitle(randomTitle));
};


