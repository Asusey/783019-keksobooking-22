import {
  FORM
} from './form.js'

const TITLE_INPUT = FORM.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const PRICE_INPUT = FORM.querySelector('#price');
const MAX_PRICE = 1000000;

const ROOM_NUMBER_SELECT = FORM.querySelector('#room_number');
const CAPACITY_SELECT = FORM.querySelector('#capacity');

const roomCapacityMap = {
  '1': ['1'],
  '2':['1', '2'],
  '3':['1', '2', '3'],
  '100':['0'],
}

//заголовок объявления
TITLE_INPUT.addEventListener('input', () => {
  const valueLength = TITLE_INPUT.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    TITLE_INPUT.setCustomValidity('Введите ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    TITLE_INPUT.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  } else {
    TITLE_INPUT.setCustomValidity('');
  }
  TITLE_INPUT.reportValidity();
});

//цена за ночь
PRICE_INPUT.addEventListener('invalid', () => {
  if (PRICE_INPUT > MAX_PRICE) {
    PRICE_INPUT.setCustomValidity('Цена за ночь не должна превышать ' + MAX_PRICE);
  } else {
    PRICE_INPUT.setCustomValidity('');
  }
});

/*/количество комнат, количество мест
(document.querySelector('[value="2"]'))
ROOM_NUMBER.addEventListener('change', (evt) => {
  if (evt.target.ROOM_NUMBER.value === 1) {
    CAPACITY.value[2].disabled = true;
    CAPACITY.value[3].disabled = true;
    CAPACITY.value[100].disabled = true;
  } else if (evt.target.ROOM_NUMBER.value === 2) {
    CAPACITY.value[1].disabled = false;
    CAPACITY.value[2].disabled = false;
    CAPACITY.value[3].disabled = true;
    CAPACITY.value[100].disabled = true;
  }
});*/

//количество комнат = количество мест
const dropDisabled = (options) => {
  options.forEach(option => {
    option.removeAttribute('disabled');
  })
}

ROOM_NUMBER_SELECT.addEventListener('change', (evt) => {
  const capacity = roomCapacityMap[evt.target.value];
  const options = CAPACITY_SELECT.querySelectorAll('option');

  //удаляем у всех disabled, чтобы начать с читстого листа
  dropDisabled(options);

  //расставляем disabled и selected
  options.forEach((option) => {
    if (!capacity.includes(option.value)) {
      option.setAttribute('disabled', 'disabled');
    } else {
      option.setAttribute('selected', 'selected');
    }
  });
});
