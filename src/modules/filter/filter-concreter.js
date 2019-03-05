export default (filterParams) => {
  const captionToLowerCase = filterParams.caption.toLowerCase();

  return `<input
          type="radio"
          id="filter__${captionToLowerCase}"
          class="filter__input visually-hidden"
          name="filter"
          ${filterParams.state || ``}
        />
        <label for="filter__${captionToLowerCase}" class="filter__label">
          ${filterParams.caption.toUpperCase()} <span class="filter__all-count">${filterParams.amount}</span></label
        >`;
};
