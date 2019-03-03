import concreteDeadline from './deadline-concreter';

import {getDayAndMonth} from '../../../assets/handler/handler';
import {getTime} from '../../../assets/handler/handler';

export default (dueDate, container) => {
  const dayAndMonth = getDayAndMonth(dueDate);
  const time = getTime(dueDate);

  container.insertAdjacentHTML(
      `beforeend`, concreteDeadline(dayAndMonth, time));
};
