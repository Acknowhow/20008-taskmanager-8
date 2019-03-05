import concreteTag from './tag-concreter';

import {getRandomSlicedArray} from '../../../assets/handler';

export default (tags, container) => {
  const tagContainer = container.querySelector(`.card__hashtag-list`);
  const randomSlicedTags = new Set(getRandomSlicedArray(tags));

  for (const tag of randomSlicedTags) {
    tagContainer.insertAdjacentHTML(
        `beforeend`, concreteTag(tag));
  }
};
