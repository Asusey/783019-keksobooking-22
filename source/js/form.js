import { sendData } from './api.js';
import { createSuccessfulCreation, createErrorCreation } from './popup.js';
import { mainPinMarker, LAT, LNG, resetPins } from './map.js';
import { resetImage } from './upload.js';
import { resetFilterForm } from './filter.js';
import { PRICE_INPUT, resetInvalidFields } from './validation.js';

const FORM = document.querySelector('.ad-form');
const HOUSE_TYPE = FORM.querySelector('#type');
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

// проверяем цену при отправке формы
const checkPrice = () => {
  const price = PRICE_INPUT.value;
  const houseType = HOUSE_TYPE.value;

  if (!price && houseType !== 'bungalow') {
    PRICE_INPUT.setCustomValidity('Поле, обязательное для заполнения');
    return false;
  }
  if (parseInt(price, 10) < minPrice[houseType]) {
    PRICE_INPUT.setCustomValidity(
      `Цена не может быть ниже ${minPrice[houseType]}`,
    );
    return false;
  }

  PRICE_INPUT.setCustomValidity('');
  return true;
};

PRICE_INPUT.addEventListener('input', () => {
  checkPrice();
  PRICE_INPUT.reportValidity();
});

PRICE_INPUT.addEventListener('blur', () => {
  checkPrice();
  PRICE_INPUT.reportValidity();
});

HOUSE_TYPE.addEventListener('change', (evt) => {
  PRICE_INPUT.placeholder = minPrice[evt.target.value];
  PRICE_INPUT.setAttribute('min', minPrice[evt.target.value]);
  checkPrice();
  PRICE_INPUT.reportValidity();
});

FORM_ELEMENT_TIME.addEventListener('change', (evt) => {
  CHECKOUT.value = evt.target.value;
  CHECKIN.value = evt.target.value;
});

//очистка формы
const onClearForm = () => {
  FORM.reset();
  resetImage();
  resetFilterForm();
  resetPins();
  resetInvalidFields();
  PRICE_INPUT.placeholder = minPrice.flat;

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

    //проверяем цену при отправке формы
    if (!checkPrice()) {
      return;
    }

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
  evt.preventDefault();
  onClearForm();
  resetImage();
  resetFilterForm();
  resetPins();
});

const initFormSubmit = () => {
  setUserFormSubmit(createSuccessfulCreation, createErrorCreation);
};

export { FORM, ADDRESS, initFormSubmit };
