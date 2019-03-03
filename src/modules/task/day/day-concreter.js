export default (dayKey, dayValue) => {
  const dayToLowerCase = dayKey.toLowerCase();

  return dayValue ? `
<input 
  class="visually-hidden card__repeat-day-input" 
  type="checkbox" 
  id="repeat-${dayToLowerCase}-1" 
  name="repeat" value="${dayToLowerCase}"/>
<label class="card__repeat-day" 
  for="repeat-${dayToLowerCase}-1">${dayToLowerCase}</label>` : ``;
};
