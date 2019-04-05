import Title from './title-concreter';
import {getRandomArrayElement} from '../../../assets/handler';

export default (task, container) => {
  const {titles} = task;
  const titleContainer = container.querySelector(
      `.card__textarea-wrap`);

  const randomTitle = getRandomArrayElement(titles);
  const title = new Title(randomTitle);

  titleContainer.appendChild(title.render());

  return title;
};
