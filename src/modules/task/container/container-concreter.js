import Component from '../../../assets/concreter';
import {Color} from '../../../data';

export default class Container extends Component {
  constructor(color, days) {
    super();
    this._color = color;
    this._days = days;

    this._onEdit = null;
    this._onEditButtonClick = this._onEditButtonClick.bind(this);
  }

  _onEditButtonClick(e) {
    e.preventDefault();

    if (typeof this._onEdit === `function`) {
      this._onEdit();
    }
  }

  _isRepeated() {
    return Object.values(this._days)
      .some((it) => it === true);
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `  
        <article class="card ${Color[this._color]} ${this._isRepeated() ? `card--repeat` : ``}">
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
          
                  <div class="card__hashtag">
                  
          <!-- tagBuilder -->        
                    
                  </div>
                </div>
          
          <!-- pictureBuilder -->
                <label class="card__img-wrap">
          
                </label>
                
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
    this._element.querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this._onEditButtonClick);
  }

  unbind() {
    this._element.querySelector(`.card__btn--edit`)
      .removeEventListener(`click`, this._onEditButtonClick);
  }
}
