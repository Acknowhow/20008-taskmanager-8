import Deadline from './deadline-concreter';
import moment from 'moment';


export default (task, container) => {
  const {dueDate} = task;
  const dateContainer = container.querySelector(
    `.card__dates`);

  const dayAndMonth = moment(dueDate).format(`DD MMMM`);
  const time = moment(dueDate).format(`HH:mm`);

  const deadline = new Deadline(dayAndMonth, time);
  dateContainer.appendChild(deadline.render());

  return deadline;
};
