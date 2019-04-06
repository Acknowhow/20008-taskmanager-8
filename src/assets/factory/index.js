export const manufacture = (data, container, ...callbacks) => {
  const callBacksArray = [];
  const builtContainer = container();

  while (callbacks.length) {
    const callback = callbacks.shift();

    callBacksArray.push(callback(data, builtContainer));
  }

  return callBacksArray;
};

export const unrender = (...callbacks) => {
  while (callbacks.length) {

    const callback = callbacks.shift();
    callback.unrender();
  }
}

export const createElement = (template) => {
  const elementContainer = document.createElement(`div`);
  const templateContainer = document.createElement(`template`);
  templateContainer.innerHTML = template;

  elementContainer.appendChild(templateContainer.content);

  return elementContainer;
};
