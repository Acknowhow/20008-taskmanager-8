import Color from './color-concreter';

export default (task, container, index) => {
  const {color} = task;

  const colorContainer = container.querySelector(`.card__colors-inner`)

  const colorConcrete = new Color(color, index);
  colorContainer.appendChild(colorConcrete.render());

  return colorConcrete;
};
