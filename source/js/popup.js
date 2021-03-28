import { isEscEvent } from './util.js';

const successfulCreationTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorCreationTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');
const MAIN = document.querySelector('main');
const successfulCreation = successfulCreationTemplate.cloneNode(true);
const errorCreation = errorCreationTemplate.cloneNode(true);

// удаление попапа об успешном создании объявления
const closePopup = () => {
  successfulCreation.remove();
  document.removeEventListener('click', closePoupHandler);
  document.removeEventListener('keydown', closePoupByKeyHandler);
};

const closePoupHandler = (evt) => {
  evt.preventDefault();
  closePopup();
};

const closePoupByKeyHandler = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

//успешное создание объявления
const createSuccessfulCreation = () => {
  MAIN.appendChild(successfulCreation);

  document.addEventListener('click', closePoupHandler);
  document.addEventListener('keydown', closePoupByKeyHandler);
};

//удаление попапа об ошибке создания объявления
const closeErrorPopup = () => {
  errorCreation.remove();
  document.removeEventListener('click', closeErrorPopupHandler);
  document.removeEventListener('keydown', closeErrorPoupByKeyHandler);
};

const closeErrorPopupHandler = (evt) => {
  evt.preventDefault();
  closeErrorPopup();
};

const closeErrorPoupByKeyHandler = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeErrorPopup();
  }
};

//ошибка создания объявления
const createErrorCreation = () => {
  MAIN.appendChild(errorCreation);

  document.addEventListener('click', closeErrorPopupHandler);
  document.addEventListener('keydown', closeErrorPoupByKeyHandler);
};

export { createSuccessfulCreation, createErrorCreation };
