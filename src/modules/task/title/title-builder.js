import concreteTitle from './title-concreter';

import {getRandomArrayElement} from '../../../assets/handler/handler';

export default (titles, container) => {
  const randomTitle = getRandomArrayElement(titles);

  container.insertAdjacentHTML(
      `beforeend`, concreteTitle(randomTitle));
};


