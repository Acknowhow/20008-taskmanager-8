import Component from '../../../assets/concreter';

export default class Title extends Component {
  constructor(title) {
    super();
    this._title = title;
  }

  get template() {
      return `
        <label>
          <textarea
            class="card__text"
            placeholder="Start typing your text here..."
            name="text">${this._title}</textarea>
        </label>`;
  }
};
