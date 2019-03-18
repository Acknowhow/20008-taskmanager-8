import concretePicture from './picture-concreter';

export default (task, container) => {
  const {picture} = task;
  const pictureContainer = container.querySelector(`.card__img-wrap`)

  pictureContainer.insertAdjacentHTML(
      `beforeend`, concretePicture(picture));
};

