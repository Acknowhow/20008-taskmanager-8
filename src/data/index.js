import {getFutureDateWithinWeek} from '../assets/handler';

const titles = [
  `Do your makeup`,
  `Recitation time`,
  `Role rehearsal`
];

const tags = [
  `horror`, `comedy`, `melodramatic`, `fiction`, `documental`
];

const colors = [
  `black`, `yellow`, `blue`, `green`, `pink`
];

const days = {
  'Mo': true,
  'Tu': false,
  'We': true,
  'Th': false,
  'Fr': false,
  'Sa': true,
  'Su': false
};

export const Color = {
  blue: `card--blue`,
  black: `card--black`,
  yellow: `card--yellow`,
  green: `card--green`,
  pink: `card--pink`,
};


export const task = {
  colors,
  titles,
  dueDate: getFutureDateWithinWeek(),
  days,
  tags,
  get picture() {
    return `http://picsum.photos/100/100?r=${Math.random()}`;
  },
  isFavorite: true,
  isDone: true
};


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


