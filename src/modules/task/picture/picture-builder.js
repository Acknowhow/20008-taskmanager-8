import concretePicture from './picture-concreter';

export default (imageSrc, container) => {
  const pictureContainer = container.querySelector(`.card__img-wrap`)

  pictureContainer.insertAdjacentHTML(
      `beforeend`, concretePicture(imageSrc));
};

