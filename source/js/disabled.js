import { FORM, ADDRESS } from './form.js';
import { setCapacitySelectdisabled } from './validation.js';

const MAP_FILTERS = document.querySelector('.map__filters');
const MAP_FILTERS_ELEMENTS = MAP_FILTERS.querySelectorAll('.map__filter');
const MAP_FILTERS_INPUT = MAP_FILTERS.querySelector('.map__features');
const FORM_HEADER = FORM.querySelector('.ad-form-header');
const FORM_ELEMENTS = FORM.querySelectorAll('.ad-form__element');

const toggleDisable = (elements, state) => {
  elements.forEach(element => {
    element.disabled = state;
  })
};

//добавляем фильтру и эелементам фильтра неактивное состояние
const setMapFilterElementsDisabled = () => {
  MAP_FILTERS.classList.add('ad-form--disabled');
  toggleDisable(MAP_FILTERS_ELEMENTS, true);
  MAP_FILTERS_INPUT.setAttribute('disabled', 'disabled');
};

//добавляем форме заполнения и элементам неактивное состояние
const setFormElementsDisabled = () => {
  FORM.classList.add('ad-form--disabled');
  FORM_HEADER.setAttribute('disabled', 'disabled');
  toggleDisable(FORM_ELEMENTS, true);
};

//активное состояние фильтра и его элементов
const setMapFilterElementsActive = () => {
  MAP_FILTERS.classList.remove('ad-form--disabled');
  toggleDisable(MAP_FILTERS_ELEMENTS, false);
  MAP_FILTERS_INPUT.removeAttribute('disabled', 'disabled');
};

//активное состояние формы заполнения и ее элементов
const setFormElementsActive = () => {
  FORM.classList.remove('ad-form--disabled');
  FORM_HEADER.removeAttribute('disabled', 'disabled');
  toggleDisable(FORM_ELEMENTS, false);
};

const setFormActive = () => {
  setMapFilterElementsActive();
  setFormElementsActive();
  setCapacitySelectdisabled();
};

const initDisabled = () => {
  setMapFilterElementsDisabled();
  setFormElementsDisabled();
  ADDRESS.setAttribute('readonly', '');
}

export { setFormActive,  initDisabled };
