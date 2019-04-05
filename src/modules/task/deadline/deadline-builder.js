import Deadline from './deadline-concreter';

import {getDayAndMonth} from '../../../assets/handler';
import {getTime} from '../../../assets/handler';

export default (task, container) => {
  const {dueDate} = task;
  const dateContainer = container.querySelector(
    `.card__dates`)
  const dayAndMonth = getDayAndMonth(dueDate);
  const time = getTime(dueDate);

  const deadline = new Deadline(dayAndMonth, time);
  dateContainer.appendChild(deadline.render());

  return deadline;
};
