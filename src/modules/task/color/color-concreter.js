import Component from '../../../assets/concreter';

export default class Color extends Component {
  constructor(colors) {
    super();
    this._colors = colors;
  }

  _getColors() {
    const array = [];

    for (const color of new Set(this._colors)) {
      array.push(`
        <input
          type="radio"
          id="color-${color}-1"
          class="card__color-input card__color-input--${color} visually-hidden"
          name="color"
          value="${color}"
          checked
        />
        <label
          for="color-${color}-1"
          class="card__color card__color--${color}"
          >${color}</label
        >`)
    }
    return array;
  }

  get template() {
    return `
      <h3 class="card__colors-title">Color</h3>
      <div class="card__colors-wrap">${this._getColors().join(``)}</div>`;
  }
}
