import {getRandomIntInclusive} from '../handler/handler';

export const insert = (tasks, container) => {
  let randomNumber;
  randomNumber = getRandomIntInclusive(0, tasks.length - 1);
  container.innerHTML = ``;

  while (randomNumber >= 0) {

    container.insertAdjacentHTML(`beforeend`, tasks[randomNumber]);
    randomNumber--;
  }
};
