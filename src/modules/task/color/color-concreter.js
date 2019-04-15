import Component from '../../../assets/concreter';
import {colors} from '../../../data';

export default class Color extends Component {
  constructor(color, index) {
    super();
    this._color = color;
    this._index = index;

    this._onColorChangeClick = this._onColorChangeClick.bind(this);
  }

  _onColorChangeClick(e) {
    e.stopPropagation();
  }

  _getColors() {
    const array = [];

    for (const color of colors) {
      array.push(`
        <input
          type="radio"
          id="color-${color}-${this._index}"
          class="card__color-input card__color-input--${color} visually-hidden"
          name="color"
          value="${color}"
          ${this._color === color && `checked`}
        />
        <label
          for="color-${color}-${this._index}"
          class="card__color card__color--${color}"
          >${color}</label
        >`);
    }
    return array;
  }

  get template() {
    return `
      <h3 class="card__colors-title">Color</h3>
      <div class="card__colors-wrap">${this._getColors().join(``)}</div>`;
  }

  bind() {
    this._element.querySelector(`.card__colors-wrap`)
      .addEventListener(`change`, this._onColorChangeClick);
  }
}
