import {getRandomIntInclusive} from '../handler/handler';

export const insert = (cards, container) => {
  let randomNumber;
  randomNumber = getRandomIntInclusive(0, cards.length - 1);
  container.innerHTML = ``;

  while (randomNumber >= 0) {

    container.insertAdjacentHTML(`beforeend`, cards[randomNumber]);
    randomNumber--;
  }
};
