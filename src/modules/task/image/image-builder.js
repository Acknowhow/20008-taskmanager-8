import concreteImage from './image-concreter';

export default (imageSrc, container) => {
  container.insertAdjacentHTML(
      `beforeend`, concreteImage(imageSrc));
};

