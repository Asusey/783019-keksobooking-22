import { FORM } from './form.js';

const TITLE_INPUT = document.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const PRICE_INPUT = FORM.querySelector('#price');
const MAX_PRICE = 1000000;
const ROOM_NUMBER_SELECT = FORM.querySelector('#room_number');
const CAPACITY_SELECT = FORM.querySelector('#capacity');
const FORM_FIELDS = FORM.elements;

const roomCapacityMap = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const initValidation = () => {
  //заголовок объявления
  TITLE_INPUT.addEventListener('input', () => {
    const valueLength = TITLE_INPUT.value.length;

    if (valueLength < MIN_TITLE_LENGTH) {
      TITLE_INPUT.setCustomValidity(
        'Введите ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.',
      );
    } else if (valueLength > MAX_TITLE_LENGTH) {
      TITLE_INPUT.setCustomValidity(
        'Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.',
      );
    } else {
      TITLE_INPUT.setCustomValidity('');
    }
    TITLE_INPUT.reportValidity();
  });

  //цена за ночь
  PRICE_INPUT.addEventListener('input', () => {
    if (PRICE_INPUT.validity.rangeOverflow) {
      PRICE_INPUT.setCustomValidity(
        'Цена за ночь не должна превышать ' + MAX_PRICE,
      );
    } else if (PRICE_INPUT.validity.rangeUnderflow) {
      PRICE_INPUT.setCustomValidity(
        'Цена за ночь не может быть меньше ' + PRICE_INPUT.min,
      );
    } else if (PRICE_INPUT.validity.valueMissing) {
      PRICE_INPUT.setCustomValidity('Поле, обязательное для заполнения');
    } else {
      PRICE_INPUT.setCustomValidity('');
    }
  });

  //количество комнат = количество мест
  ROOM_NUMBER_SELECT.addEventListener('change', (evt) => {
    const capacity = roomCapacityMap[evt.target.value];
    const options = CAPACITY_SELECT.querySelectorAll('option');

    //расставляем disabled и selected
    options.forEach((option) => {
      if (!capacity.includes(option.value)) {

        option.setAttribute('disabled', 'disabled');
      } else {
        option.removeAttribute('disabled');
        CAPACITY_SELECT.value = option.value;
      }
    });
  });
}

//подсветка неверных полей
const checkedInvalidFields = () => {
  for (let i = 0; i < FORM_FIELDS.length; i++) {
    FORM_FIELDS[i].addEventListener('invalid', (evt) => {
      evt.target.style.border = 'solid 3px red';
    });
    FORM_FIELDS[i].addEventListener('input', (evt) => {
      evt.target.style.border = 'none';
    });
  }
}

checkedInvalidFields();

export { initValidation};