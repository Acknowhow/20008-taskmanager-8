export default (dayAndMonth, time) => {
  return `
<label class="card__input-deadline-wrap">
  <input
    class="card__date"
    type="text"
    placeholder="${dayAndMonth}"
    name="date"
  />
</label>
<label class="card__input-deadline-wrap">
  <input
    class="card__time"
    type="text"
    placeholder="${time}"
    name="time"
  />
</label>`;
};
