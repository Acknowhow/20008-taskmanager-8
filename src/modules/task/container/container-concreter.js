import Component from '../../../assets/concreter';

export default class Container extends Component {
  constructor(color) {
    super();
    this._color = color;
    this._onEdit = null;

    this._onEditButtonClick = this._onEditButtonClick.bind(this);
  }

  _onEditButtonClick(e) {
    e.preventDefault();

    if (typeof this._onEdit === `function`) {
      this._onEdit();
    }
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `<article class="card card--${this._color}">
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
    this._element.querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this._onEditButtonClick);
  }

  unbind() {
    this._element.querySelector(`.card__btn--edit`)
      .removeEventListener(`click`, this._onEditButtonClick);
  }
}
