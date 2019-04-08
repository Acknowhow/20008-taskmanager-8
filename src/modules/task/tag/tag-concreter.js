import Component from '../../../assets/concreter';

export default class Tag extends Component {
  constructor(tags) {
    super();

    this._tags = tags;
  }

  _getTags() {
    const array = [];

    for (const tag of this._tags) {
      array.push(`
        <span class="card__hashtag-inner">
          <input
            type="hidden"
            name="hashtag"
            value="${tag}"
            class="card__hashtag-hidden-input"/>
        <button type="button" class="card__hashtag-name">${tag}</button>
        <button type="button" class="card__hashtag-delete">delete</button>
        </span>`);
    }
    return array;
  }

  get template() {

    return `
      <div class="card__hashtag-list">${this._getTags().join(``)}</div>
          
      <label>
        <input
          type="text"
          class="card__hashtag-input"
          name="hashtag-input"
          placeholder="Type new hashtag here"
        />
      </label>`
  }
}
