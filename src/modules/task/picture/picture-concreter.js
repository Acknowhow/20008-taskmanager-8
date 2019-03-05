export default (pictureSource) => {
  return `
<input
  type="file"
  class="card__img-input visually-hidden"
  name="img"/>
<img
  src="${pictureSource}"
  alt="task picture"
  class="card__img"/>`;
};
