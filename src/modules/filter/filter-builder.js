import Container from './container/container-concreter';
import getLabelConcrete from './label/label-concreter';

// Filters with ready state
export default (container) => {
  const filterContainer = new Container();

  container.insertAdjacentElement(`afterend`, filterContainer.render());

  for (const it of filters) {
    filterContainer.element.insertAdjacentHTML(
        `beforeend`, getLabelConcrete(
            {caption: it.name, count: it.count, state: it.state}));
  }

  return filterContainer;
};
