import {getRandomArrayElement} from '../assets/handler';

const titles = [
  `Do your makeup`,
  `Recitation time`,
  `Role rehearsal`,
  `It's showtime`
];

const tags = [
  `horror`, `comedy`, `melodramatic`, `fiction`, `documental`
];

export const colors = new Set([`black`, `yellow`, `blue`, `green`, `pink`]);


const days = {
  'mo': true,
  'tu': false,
  'we': true,
  'th': false,
  'fr': false,
  'sa': true,
  'su': false
};

export const Color = {
  blue: `card--blue`,
  black: `card--black`,
  yellow: `card--yellow`,
  green: `card--green`,
  pink: `card--pink`,
};


export const tasks = [
  {
    color: [...colors][0],
    title: titles[0],
    dueDate: 1569268800000,
    days,
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    colors,
    color: [...colors][1],
    titles,
    title: getRandomArrayElement(titles),
    dueDate: 1571778000000,
    days,
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false
  },
  {
    colors,
    color: [...colors][2],
    titles,
    title: getRandomArrayElement(titles),
    dueDate: 1574456400000,
    days,
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false
  }
];


export const filters = [
  {
    name: `All`,
    amount: 15,
    state: `checked`
  },
  {
    name: `Overdue`,
    amount: 0,
    state: `disabled`
  },
  {
    name: `Today`,
    amount: 0,
    state: `disabled`
  },
  {
    name: `Favourites`,
    amount: 7,
    state: false
  },
  {
    name: `Repeating`,
    amount: 2,
    state: false
  },
  {
    name: `Tags`,
    amount: 6,
    state: false
  },
  {
    name: `Archive`,
    amount: 115,
    state: false
  }
];


