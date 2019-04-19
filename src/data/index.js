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

export const Method = {
  GET: `GET`,
  POST: `POST`,
  PUT: `PUT`,
  DELETE: `DELETE`
};

export const colors = new Set([`black`, `yellow`, `blue`, `green`, `pink`]);

export const Color = {
  blue: `card--blue`,
  black: `card--black`,
  yellow: `card--yellow`,
  green: `card--green`,
  pink: `card--pink`,
};

export const Filter = {
  [`filter__all`]: `all`,
  [`filter__overdue`]: `overdue`,
  [`filter__today`]: `today`,
  [`filter__repeating`]: `repeating`
};


export const tasks = [
  {
    id: 1,
    color: [...colors][2],
    title: titles[0],
    dueDate: 1555275600000,
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 2,
    color: [...colors][4],
    title: titles[0],
    dueDate: 1555275600500,
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 3,
    color: [...colors][4],
    title: titles[0],
    dueDate: 1555275610000,
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 4,
    color: [...colors][4],
    title: titles[0],
    dueDate: 1555362010000,
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 5,
    color: [...colors][4],
    title: titles[0],
    dueDate: 1555362020000,
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 6,
    color: [...colors][4],
    title: titles[0],
    dueDate: 1555448400000,
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 7,
    color: [...colors][4],
    title: titles[0],
    dueDate: 1555448400000,
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 8,
    color: [...colors][4],
    title: titles[0],
    dueDate: 1555534800000,
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 9,
    color: [...colors][4],
    title: titles[0],
    dueDate: 1555534800000,
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 10,
    color: [...colors][4],
    title: titles[0],
    dueDate: 1555621200000,
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 11,
    color: [...colors][4],
    title: titles[0],
    dueDate: 1537650000000,
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 12,
    color: [...colors][4],
    title: titles[0],
    dueDate: 1537650000000,
    repeatingDays: {
      'mo': true,
      'tu': false,
      'we': true,
      'th': false,
      'fr': false,
      'sa': true,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 13,
    color: [...colors][0],
    title: titles[0],
    dueDate: 1569268800000,
    repeatingDays: {
      'mo': true,
      'tu': false,
      'we': true,
      'th': false,
      'fr': false,
      'sa': true,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false

  },
  {
    id: 14,
    color: [...colors][1],
    title: getRandomArrayElement(titles),
    dueDate: 1571778000000,
    repeatingDays: {
      'mo': true,
      'tu': false,
      'we': true,
      'th': false,
      'fr': false,
      'sa': true,
      'su': false
    },
    tags,
    get picture() {
      return `http://picsum.photos/100/100?r=${Math.random()}`;
    },
    isFavorite: true,
    isDone: true,
    isDeleted: false
  },
  {
    id: 15,
    color: [...colors][2],
    title: getRandomArrayElement(titles),
    dueDate: 1574456400000,
    repeatingDays: {
      'mo': true,
      'tu': false,
      'we': true,
      'th': false,
      'fr': false,
      'sa': true,
      'su': false
    },
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
    count: 15,
    state: `checked`
  },
  {
    name: `Overdue`,
    count: 0,
    state: false
  },
  {
    name: `Today`,
    count: 0,
    state: false
  },
  {
    name: `Repeating`,
    count: 2,
    state: false
  }
];


