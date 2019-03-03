import concreteTag from './tag-concreter';

import {getRandomSlicedArray} from '../../../assets/handler/handler';

export default (tags, container) => {
  const randomSlicedTags = new Set(getRandomSlicedArray(tags));

  for (const tag of randomSlicedTags) {
    container.insertAdjacentHTML(
        `beforeend`, concreteTag(tag));
  }
};
