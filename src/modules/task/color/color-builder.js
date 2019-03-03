import concreteColor from './color-concreter';

export default (colors, container) => {
  const colorsSet = new Set(colors);
  for (const color of colorsSet) {
    container.insertAdjacentHTML(
        `beforeend`, concreteColor(color));
  }
};
