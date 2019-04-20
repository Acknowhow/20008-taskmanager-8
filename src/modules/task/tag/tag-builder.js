import Tag from './tag-concreter';

import {getRandomSlicedArray} from '../../../assets/handler';

export default (task, container) => {
  const {tags} = task;
  const tagContainer = container.querySelector(`.card__hashtag`);

  const randomSlicedTags = new Set(tags);

  const tag = new Tag(randomSlicedTags);
  tagContainer.appendChild(tag.render());

  return tag;
};
