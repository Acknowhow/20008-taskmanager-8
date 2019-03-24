export const factorize = (data, container, ...callbacks) => {
  const builtContainer = container();

  while (callbacks.length) {
    const callback = callbacks.shift();

    callback(data, builtContainer);
  }
};

export const createElement = (template) => {
  const elementContainer = document.createElement(`div`);
  elementContainer.insertAdjacentHTML(`beforeend`, template);

  return elementContainer.firstElementChild;

};
