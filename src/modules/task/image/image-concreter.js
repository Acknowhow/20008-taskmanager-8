export default (imageSrc) => {
  return `
<input
  type="file"
  class="card__img-input visually-hidden"
  name="img"/>
<img
  src="${imageSrc}"
  alt="task picture"
  class="card__img"/>`;
};
