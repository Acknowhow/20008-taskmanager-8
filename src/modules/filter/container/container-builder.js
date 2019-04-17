import Container from './container-concreter';

export default (container, filters) => {
  const filterContainer = new Container(filters);

  container.insertAdjacentElement(`afterend`, filterContainer.render());
  return filterContainer;
};
