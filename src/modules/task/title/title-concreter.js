export default (title) => {
  return `
<label>
  <textarea
    class="card__text"
    placeholder="Start typing your text here..."
    name="text">${title}</textarea>
</label>`;
};
