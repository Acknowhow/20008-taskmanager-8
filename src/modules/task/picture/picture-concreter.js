import Component from '../../../assets/concreter';

export default class Picture extends Component {
  constructor(src) {
    super();

    this._src = src;
  }

  get template() {
    return `
      <div>
        <input
          type="file"
          class="card__img-input visually-hidden"
          name="img"/>
        <img
          src="${this._src}"
          alt="task picture"
          class="card__img"/>
      </div>`
  }
}
