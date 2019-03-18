export const factorize = (data, container, ...callbacks) => {
  const builtContainer = container();

  while (callbacks.length) {
    const callback = callbacks.shift();

    callback(data, builtContainer);
  }
};
