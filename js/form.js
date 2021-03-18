import { sendData } from './api.js';

import { createSuccessfulCreation, createErrorCreation } from './popup.js';

import { mainPinMarker, LAT, LNG } from './map.js';

const FORM = document.querySelector('.ad-form');
const HOUSE_TYPE = FORM.querySelector('#type');
const PRICE = FORM.querySelector('#price');
const ADDRESS = FORM.querySelector('#address');
const FORM_ELEMENT_TIME = FORM.querySelector('.ad-form__element--time');
const CHECKIN = FORM.querySelector('#timein');
const CHECKOUT = FORM.querySelector('#timeout');
const RESET_BUTTON = FORM.querySelector('.ad-form__reset');

const minPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

HOUSE_TYPE.addEventListener('change', (evt) => {
  PRICE.placeholder = minPrice[evt.target.value];
});

FORM_ELEMENT_TIME.addEventListener('change', (evt) => {
  CHECKOUT.value = evt.target.value;
  CHECKIN.value = evt.target.value;
});

//очистка формы
const onClearForm = () => {
  FORM.reset();
  mainPinMarker.setLatLng({
    lat: LAT,
    lng: LNG,
  });
  ADDRESS.value = `${LAT}, ${LNG}`;
};

//отменяет действие формы по умолчанию, отправляет данные на сервер
const setUserFormSubmit = (onSuccessSubmit, onFail) => {
  FORM.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        onSuccessSubmit();
        onClearForm();
      },
      () => onFail(),
      new FormData(evt.target),
    );
  });
};

//кнопка очистить форму
RESET_BUTTON.addEventListener('click', (evt) => {
  evt.onClearForm();
});

setUserFormSubmit(createSuccessfulCreation, createErrorCreation);

export { FORM, ADDRESS, setUserFormSubmit };
