import Component from '../../../assets/concreter';

export default class Day extends Component {
  constructor(days) {
    super();
    this._days = days;

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
    for (const [key, value] of new Map(Object.entries(this._days))) {
      const dayToLowerCase = key.toLowerCase();
      array.push(`
          <input 
            class="visually-hidden card__repeat-day-input" 
            type="checkbox" 
            id="repeat-${dayToLowerCase}-1" 
            name="repeat" value="${dayToLowerCase}" ${value === true ? `checked` : ``}/>
          <label class="card__repeat-day" 
            for="repeat-${dayToLowerCase}-1">${dayToLowerCase}</label>`);
    }

    return array;
  }

  get template() {
    return `
      <button class="card__repeat-toggle" type="button">
        repeat:<span class="card__repeat-status">${this._state.isRepeated ? `yes` : `no`}</span>
      </button>
                                            
      <fieldset class="card__repeat-days" ${!this._state.isRepeated && `disabled`}>
        <div class="card__repeat-days-inner">${this._getDays().join(``)}</div>
      </fieldset>`;
  }

  bind() {
    this._element.querySelector(`.card__repeat-toggle`)
      .addEventListener(`click`, this._onChangeRepeated);
  }

  unbind() {
    this._element.querySelector(`.card__repeat-toggle`)
      .removeEventListener(`click`, this._onChangeRepeated);
  }
}
