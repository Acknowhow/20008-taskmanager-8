import Picture from './picture-concreter';

export default (task, container) => {
  const {picture} = task;
  const pictureContainer = container.querySelector(`.card__img-wrap`)

  const pictureConcrete = new Picture(picture);
  pictureContainer.appendChild(pictureConcrete.render());

  return pictureConcrete;
};

