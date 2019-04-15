export const manufacture = (data, container, index, ...callbacks) => {
  const callBacksArray = [];
  const builtContainer = container();

  while (callbacks.length) {
    const callback = callbacks.shift();

    callBacksArray.push(callback(data, builtContainer, index));
  }
  return callBacksArray;
};

export const unrender = (...callbacks) => {
  while (callbacks.length) {

    const callback = callbacks.shift();
    callback.unrender();
  }
};

export const update = (data, ...callbacks) => {
  while (callbacks.length) {
    const callback = callbacks.shift();

    if (callback[update]) {
      callback.update(data);
    }
  }
};

export const createElement = (template) => {
  const elementContainer = document.createElement(`div`);
  const templateContainer = document.createElement(`template`);
  templateContainer.innerHTML = template;

  elementContainer.appendChild(templateContainer.content);

  return elementContainer.firstElementChild;
};
