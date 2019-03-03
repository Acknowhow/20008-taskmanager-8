export default (color) => {
  return `
<article class="card card--${color}">
  <form class="card__form" method="get">
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
        <svg width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
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
  
  <!-- imgBuilder -->
        <label class="card__img-wrap card__img-wrap--empty">
  
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
};
