import { FORM, ADDRESS } from './form.js';

const MAP_FILTERS = document.querySelector('.map__filters');
const MAP_FILTERS_ELEMENTS = MAP_FILTERS.querySelectorAll('.map__filter');
const MAP_FILTERS_INPUT = MAP_FILTERS.querySelector('.map__features');
const FORM_HEADER = FORM.querySelector('.ad-form-header');
const FORM_ELEMENTS = FORM.querySelectorAll('.ad-form__element');

//добавляем фильтру и эелементам фильтра неактивное состояние
const setMapFilterElementsDisabled = () => {
  MAP_FILTERS.classList.add('ad-form--disabled');
  for (let i = 0; i < MAP_FILTERS_ELEMENTS.length; i++) {
    MAP_FILTERS_ELEMENTS[i].disabled = true;
  }
  MAP_FILTERS_INPUT.setAttribute('disabled', 'disabled');
};
setMapFilterElementsDisabled();

//добавляем форме заполнения и элементам неактивное состояние
const setFormElementsDisabled = () => {
  FORM.classList.add('ad-form--disabled');
  FORM_HEADER.setAttribute('disabled', 'disabled');
  for (let i = 0; i < FORM_ELEMENTS.length; i++) {
    FORM_ELEMENTS[i].disabled = true;
  }
};
setFormElementsDisabled();

//активное состояние фильтра и его элементов
const setMapFilterElementsActive = () => {
  MAP_FILTERS.classList.remove('ad-form--disabled');
  for (let i = 0; i < MAP_FILTERS_ELEMENTS.length; i++) {
    MAP_FILTERS_ELEMENTS[i].disabled = false;
  }
  MAP_FILTERS_INPUT.removeAttribute('disabled', 'disabled');
};

//активное состояние формы заполнения и ее элементов
const setFormElementsActive = () => {
  FORM.classList.remove('ad-form--disabled');
  FORM_HEADER.removeAttribute('disabled', 'disabled');
  for (let i = 0; i < FORM_ELEMENTS.length; i++) {
    FORM_ELEMENTS[i].disabled = false;
  }
};

const setFormActive = () => {
  setMapFilterElementsActive();
  setFormElementsActive();
};

ADDRESS.setAttribute('readonly', '');

export { setFormActive };
