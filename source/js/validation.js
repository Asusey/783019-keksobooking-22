const FORM = document.querySelector('.ad-form');
const TITLE_INPUT = document.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const PRICE_INPUT = FORM.querySelector('#price');
const ROOM_NUMBER_SELECT = FORM.querySelector('#room_number');
const CAPACITY_SELECT = FORM.querySelector('#capacity');
const FORM_FIELDS = FORM.elements;
const CAPACITY_ELEMENTS = FORM.querySelectorAll('#capacity option');

const roomCapacityMap = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

//добавляем полям элемента capacity неактивное состояние
const setCapacitySelectdisabled = () => {
  CAPACITY_ELEMENTS.forEach((element) => {
    if (!element.selected) {
      element.setAttribute('disabled', 'disabled');
    }
  });
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
};

//подсветка неверных полей
const allFormFields = Array.from(FORM_FIELDS);

const checkedInvalidFields = () => {
  allFormFields.forEach((field) => {
    field.addEventListener('invalid', (evt) => {
      evt.target.style.border = 'solid 3px red';
    });
    field.addEventListener('input', (evt) => {
      evt.target.style.border = 'none';
    });
  });
};

checkedInvalidFields();

//очистка подсветки неверных полей
const resetInvalidFields = () => {
  allFormFields.forEach((field) => {
    field.style.border = 'none';
  });
};

export {
  initValidation,
  setCapacitySelectdisabled,
  PRICE_INPUT,
  resetInvalidFields
};
