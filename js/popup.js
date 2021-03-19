import { isEscEvent } from './util.js';

const successfulCreationTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorCreationTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');
const MAIN = document.querySelector('main');

//успешное создание объявления
const createSuccessfulCreation = () => {
  const successfulCreation = successfulCreationTemplate.cloneNode(true);
  MAIN.appendChild(successfulCreation);

  document.addEventListener('click', () => {
    successfulCreation.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      successfulCreation.remove();
    }
  });
};

//ошибка создания объявления
const createErrorCreation = () => {
  const errorCreation = errorCreationTemplate.cloneNode(true);
  MAIN.appendChild(errorCreation);
  const errorButton = errorCreation.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    errorCreation.remove();
    document.addEventListener('click', () => {
      errorCreation.remove();
    });

    document.addEventListener('keydown', (evt) => {
      if (isEscEvent(evt)) {
        evt.preventDefault();
        errorCreation.remove();
      }
    });
  });
};

export { createSuccessfulCreation, createErrorCreation };
