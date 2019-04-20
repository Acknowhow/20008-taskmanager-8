import Component from '../../../assets/concreter';
import {Color} from '../../../data';

export default class ContainerEdit extends Component {
  constructor(color, repeatingDays) {
    super();
    this._color = color;
    this._repeatingDays = repeatingDays;

    this._onSubmit = null;
    this._onDelete = null;
    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
    this._onDeleteButtonClick = this._onDeleteButtonClick.bind(this);
  }

  _processForm(formData) {
    const entry = {
      title: ``,
      color: ``,
      tags: new Set(),
      date: false,
      time: false,
      repeatingDays: {
        'mo': false,
        'tu': false,
        'we': false,
        'th': false,
        'fr': false,
        'sa': false,
        'su': false
      }
    };

    const taskEditMapper = ContainerEdit.createMapper(entry);

    for (const pair of formData.entries()) {
      const [property, value] = pair;

      if (taskEditMapper[property]) {
        taskEditMapper[property](value);
      }
    }

    return entry;
  }

  _onDeleteButtonClick(e) {
    e.preventDefault();

    if (typeof this._onDelete === `function`) {
      this._onDelete();
    }
  }

  _onSubmitButtonClick(e) {
    e.preventDefault();

    const formData = new FormData(
      this._element.querySelector(`.card__form`));
    const newData = this._processForm(formData);

    if (typeof this._onSubmit === `function`) {
      this._onSubmit(newData);
    }
  }

  _isRepeated() {
    return Object.values(this._repeatingDays)
      .some((it) => it === true);
  }

  set onDelete(fn) {
    this._onDelete = fn;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get template() {
    return `
      <article class="card card--edit ${Color[this._color]} ${this._isRepeated() ? `card--repeat` : ``}">
        <form class="card__form" method="POST" enctype="multipart/form-data">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>
        
            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>
        
        <!-- titleBuilder -->  
            <div class="card__textarea-wrap">
        
            </div>
        
            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                
        <!-- deadlineBuilder -->        
          
        <!-- dayBuilder -->
                  
                </div>
        
                <div class="card__hashtag">
                
        <!-- tagBuilder -->        

                </div>
              </div>
        
        <!-- pictureBuilder -->
              <label class="card__img-wrap">
        
              </label>
              
        <!-- colorBuilder -->
              <div class="card__colors-inner">

      
                </div>
              </div>
        
            <div class="card__status-btns">
              <button class="card__save" type="submit">save</button>
              <button class="card__delete" type="button">delete</button>
            </div>
          </div>
        </form>
      </article>`;
  }


  bind() {
    this._element.querySelector(`.card__form`)
      .addEventListener(`submit`, this._onSubmitButtonClick);
    this._element.querySelector(`.card__delete`)
      .addEventListener(`click`, this._onDeleteButtonClick);
  }


  unbind() {
    this._element.querySelector(`.card__form`)
      .removeEventListener(`submit`, this._onSubmitButtonClick);
    this._element.querySelector(`.card__delete`)
      .removeEventListener(`click`, this._onDeleteButtonClick);
  }

  update(data) {
    this._color = data.color;
    this._repeatingDays = data.repeatingDays;
  }

  static createMapper(target) {
    return {
      hashtag: (value) => target.tags.add(value),
      text: (value) => target.title = value,
      color: (value) => target.color = value,
      repeat: (value) => target.repeatingDays[value] = true,
      date: (value) => {
        target.date = value !== `` ? value : false;
        return target.date;
      },
      time: (value) => {
        target.time = value !== `` ? value: false;
        return target.time;
      }
    }
  }
}
