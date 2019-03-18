import concreteColor from './color-concreter';

export default (task, container) => {
  const {colors} = task;

  const colorContainer = container.querySelector(`.card__colors-wrap`)
  const colorsSet = new Set(colors);

  for (const color of colorsSet) {
    colorContainer.insertAdjacentHTML(
        `beforeend`, concreteColor(color));
  }
};
