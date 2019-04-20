import Component from '../../../assets/concreter';

export default class Day extends Component {
  constructor(repeatingDays) {
    super();
    this._repeatingDays = repeatingDays;

    this._state.isRepeated = false;
    this._onChangeRepeated = this._onChangeRepeated.bind(this);
  }

  _onChangeRepeated() {
    this._state.isRepeated = !this._state.isRepeated;
    this.unbind();
    this._partialUpdate();
    this.bind();
  }

  _partialUpdate() {
    this._element.innerHTML = this.template;
  }

  _getDays() {
    const array = [];
    for (const [key, value] of Object.entries(this._repeatingDays)) {
      array.push(`
          <input 
            class="visually-hidden card__repeat-day-input" 
            type="checkbox" 
            id="repeat-${key}-1" 
            name="repeat" value="${key}" ${value === true ? `checked` : ``}/>
          <label class="card__repeat-day" 
            for="repeat-${key}-1">${key}</label>`);
    }

    return array;
  }

  get template() {
    return `
      <div>
        <button class="card__repeat-toggle" type="button">
          repeat:<span class="card__repeat-status">${this._state.isRepeated ? `yes` : `no`}</span>
        </button>
                                              
        <fieldset class="card__repeat-days" ${!this._state.isRepeated && `disabled`}>
          <div class="card__repeat-days-inner">${this._getDays().join(``)}</div>
        </fieldset>
      </div>`;
  }

  bind() {
    this._element.querySelector(`.card__repeat-toggle`)
      .addEventListener(`click`, this._onChangeRepeated);
  }

  unbind() {
    this._element.querySelector(`.card__repeat-toggle`)
      .removeEventListener(`click`, this._onChangeRepeated);
  }

  update(data) {
    this._repeatingDays = data.repeatingDays;
  }
}
