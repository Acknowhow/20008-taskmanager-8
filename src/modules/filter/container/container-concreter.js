import {Filter} from '../../../data';
import Component from '../../../assets/concreter';

export default class Container extends Component {
  constructor(filters) {
    super();

    this._filters = filters;
    this._onFilter = null;
    this._onFilterButtonClick = this._onFilterButtonClick.bind(this);
  }

  _onFilterButtonClick(e) {
    e.preventDefault();
    const {target} = e;

    if (typeof this._onFilter === `function` &&
      target.tagName.toUpperCase() === `LABEL`) {

      const filterValue = target.attributes[`for`].nodeValue;
      this._onFilter(Filter[filterValue]);
    }
  }

  _partialUpdate() {
    this._element.innerHTML = this._getFilters().join(``);
  }

  _getFilters() {
    return this._filters.map((it) => {

      const nameToLowerCase = it.name.toLowerCase();

      return `<input
          type="radio"
          id="filter__${nameToLowerCase}"
          class="filter__input visually-hidden"
          name="filter"
          ${it.state || ``}
          ${it.count > 0 ? `` : `disabled`}
        />
        <label for="filter__${nameToLowerCase}" class="filter__label">
          ${it.name.toUpperCase()} <span class="filter__all-count">${it.count}</span></label
        >`;
    })
  }

  set onFilter(fn) {
    this._onFilter = fn;
  }

  get template() {
    return `
      <section class="main__filter filter container">${this._getFilters().join(``)}</section>`;
  }

  bind() {
    this._element.addEventListener(`click`, this._onFilterButtonClick);
  }

  unbind() {
    this._element.removeEventListener(`click`, this._onFilterButtonClick);
  }

  update(filters) {
    this._filters = filters;

    this.unbind();
    this._partialUpdate();
    this.bind();
  }
}
