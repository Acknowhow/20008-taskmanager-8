import {Filter} from '../../../data';
import Component from '../../../assets/concreter';

export default class Container extends Component {
  constructor() {
    super();

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

  set onFilter(fn) {
    this._onFilter = fn;
  }

  get template() {
    return `
      <section class="main__filter filter container">
      </section>`;
  }

  bind() {
    this._element.addEventListener(`click`, this._onFilterButtonClick);
  }

  unbind() {
    this._element.removeEventListener(`click`, this._onFilterButtonClick);
  }
}
