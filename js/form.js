const FORM = document.querySelector('.ad-form');
const HOUSE_TYPE = FORM.querySelector('#type');
const PRICE = FORM.querySelector('#price');
const ADDRESS = FORM.querySelector('#address');

const FORM_ELEMENT_TIME = FORM.querySelector('.ad-form__element--time');
const CHECKIN = FORM.querySelector('#timein');
const CHECKOUT = FORM.querySelector('#timeout');

const minPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

//поменяла значение по-умолчанию
const key = 'flat';
PRICE.placeholder = minPrice[key];

HOUSE_TYPE.addEventListener('change', (evt) => {
  //console.log('change type', evt.target.value);
  PRICE.placeholder = minPrice[evt.target.value];
})

FORM_ELEMENT_TIME.addEventListener('change', (evt) => {
  //console.log('change type', evt.target.value);
  CHECKOUT.value = evt.target.value;
  CHECKIN.value = evt.target.value;
})

export {FORM, ADDRESS};
