export const factorize = (data, container, ...callbacks) => {
  const builtContainer = container();

  while (callbacks.length) {
    const callback = callbacks.shift();

    callback(data, builtContainer);
  }
};

export const createElement = (template) => {
  const elementContainer = document.createElement(`div`);
  const templateContainer = document.createElement(`template`);
  templateContainer.innerHTML = template;

  elementContainer.appendChild(templateContainer.content);

  return elementContainer;
};
