import getLabelConcrete from './label-concreter';

export default (filters, container) => {

  for (const it of filters) {
    container.element.insertAdjacentHTML(
        `beforeend`, getLabelConcrete(
            {caption: it.name, count: it.count, state: it.state}));
  }

  return container;
};
