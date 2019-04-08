import Title from './title-concreter';

export default (task, container) => {
  const {title} = task;
  const titleContainer = container.querySelector(
      `.card__textarea-wrap`);

  const titleConcrete = new Title(title);

  titleContainer.appendChild(titleConcrete.render());
  return titleConcrete;
};
