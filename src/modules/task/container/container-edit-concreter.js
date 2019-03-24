import Component from '../../../assets/concreter';
import {Color} from '../../../data';

export default class ContainerEdit extends Component {
  constructor(color, days) {
    super();
    this._color = color;
    this._days = days;

    this._onSubmit = null;
    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
  }

  _onSubmitButtonClick(e) {
    e.preventDefault();

    if (typeof this._onSubmit === `function`) {
      this._onSubmit();
    }
  }

  _isRepeated() {
    return Object.values(this._days)
      .some((it) => it === true);
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get template() {
    return `
      <article class="card card--edit card--${this._color} ${this._isRepeated() ? `card--repeat` : ``}">
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
      
            </div>
        
        <!-- titleBuilder -->  
            <div class="card__textarea-wrap">
        
            </div>
        
            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <button class="card__date-deadline-toggle" type="button">
                    date: <span class="card__date-status">no</span>
                  </button>
        
        <!-- deadlineBuilder -->
                  <fieldset class="card__date-deadline" disabled>
        
                  </fieldset>
        
                  <button class="card__repeat-toggle" type="button">
                    repeat:<span class="card__repeat-status">no</span>
                  </button>
        
        <!-- dayBuilder -->                                
                  <fieldset class="card__repeat-days" disabled>
                    <div class="card__repeat-days-inner">
        
                    </div>
                  </fieldset>
                </div>
        
                <div class="card__hashtag">
                
        <!-- tagBuilder -->        
                  <div class="card__hashtag-list">
                  
                  </div>
        
                  <label>
                    <input
                      type="text"
                      class="card__hashtag-input"
                      name="hashtag-input"
                      placeholder="Type new hashtag here"
                    />
                  </label>
                </div>
              </div>
        
        <!-- pictureBuilder -->
              <label class="card__img-wrap">
        
              </label>
        
              <div class="card__colors-inner">
                <h3 class="card__colors-title">Color</h3>
                
        <!-- colorBuilder -->        
                <div class="card__colors-wrap">
      
                </div>
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
  }


  unbind() {
    this.element.querySelector(`.card__form`)
      .removeEventListener(`submit`, this._onSubmitButtonClick);
  }
}
