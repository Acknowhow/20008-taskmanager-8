import {Method} from '../../data';

const container = document.querySelector(`.board__no-tasks`);

const hideMessageContainer = () => {
  setTimeout(() => {
    container.classList.add(`visually-hidden`);
  }, 3000);
}

export const loader = () => {
  container.classList.remove(`visually-hidden`);
  container.innerHTML = `Loading tasks...`;

  return () => {
    container.innerHTML = `
    Congratulations, all tasks were completed! To create a new task click on «add new task» button.`;
    hideMessageContainer();
  };
};

export const error = (method) => {
  if (method === Method.GET) {
    const errorContainer = document.querySelector(`.board__no-tasks`);

    if (errorContainer.classList.contains(`visually-hidden`)) {
      errorContainer.classList.remove(`visually-hidden`);
    }
    errorContainer.innerHTML = `
        Something went wrong while loading your tasks. Check your connection or try again later`;
    hideMessageContainer();
  }
};

export const load = (isSuccess) => {
  return new Promise((resolve, reject) => {
    setTimeout(isSuccess ? resolve : reject, 2000)
  });
};

export const block = (component, selector, message) => {
  const button = component.element.querySelector(`${selector}`);
  component.element.querySelector(`.card__inner`).style.border = `1px solid #DC143C`;
  button.innerHTML = `${message}`;
  button.disabled = true;
  component.element.querySelector(`.card__text`).disabled = true;
};

export const unblock = (component, selector, message) => {
  const button = component.element.querySelector(`${selector}`);
  component.element.querySelector(`.card__inner`).style.border = `1px solid #000000`;
  button.innerHTML = `${message}`;
  button.disabled = false;
  component.element.querySelector(`.card__text`).disabled = false;
};


