import Color from './color-concreter';

export default (task, container) => {
  const {colors} = task;

  const colorContainer = container.querySelector(`.card__colors-inner`)

  const color = new Color(colors);
  colorContainer.appendChild(color.render());

  return color;
};
