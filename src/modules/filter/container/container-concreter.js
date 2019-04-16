import Component from '../../../assets/concreter';

export default class Container extends Component {
  constructor() {
    super();

    this._onFilter = null;
    // this._onFilterButtonClick = this._onFilterButtonClick.bind(this);

  }


  set onFilter(fn) {
    this._onFilter = fn;
  }

  get template() {
    return `
      <section class="main__filter filter container">
        <form class="filter__form"></form>
      </section>`
  }


  static createMapper() {

  }
}
