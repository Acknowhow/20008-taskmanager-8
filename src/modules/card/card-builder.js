import {insert} from '../../assets/factory/insert';

export default (data, section, container) => {
  section.addEventListener(`click`, (e) => {
    const {target} = e;

    if (target.tagName.toUpperCase() === `LABEL`) {
      insert(data, container);
    }
  });
};

