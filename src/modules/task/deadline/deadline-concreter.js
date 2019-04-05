import Component from '../../../assets/concreter';

export default class Deadline extends Component {
  constructor(dayAndMonth, time) {
    super();
    this._dayAndMonth = dayAndMonth;
    this._time = time;

    this._state.isDate = false;
    this._onChangeDate = this._onChangeDate.bind(this);
  }

  _onChangeDate() {
    this._state.isDate = !this._state.isDate;
    this.unbind();
    this._partialUpdate();
    this.bind();
  }

  _partialUpdate() {
    this._element.innerHTML = this.template;
  }

  get template() {
    return `
          <button class="card__date-deadline-toggle" type="button">
            date: <span class="card__date-status">${this._state.isDate ? `yes` : `no`}</span>
          </button>
          
          <fieldset class="card__date-deadline" ${!this._state.isDate && `disabled`}>
      
            <label class="card__input-deadline-wrap">
              <input
                class="card__date"
                type="text"
                placeholder="${this._dayAndMonth}"
                name="date"
              />
            </label>
            <label class="card__input-deadline-wrap">
              <input
                class="card__time"
                type="text"
                placeholder="${this._time}"
                name="time"
              />
            </label>
  
          </fieldset>`;
  }

  bind() {
    this._element.querySelector(`.card__date-deadline-toggle`)
      .addEventListener(`click`, this._onChangeDate);
  }

  unbind() {
    this._element.querySelector(`.card__date-deadline-toggle`)
      .removeEventListener(`click`, this._onChangeDate);
  }
}







// export default (dayAndMonth, time) => {
//   return
// };
