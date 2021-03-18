const ALERT_SHOW_TIME = 5000;

//возвращает случайное целое число из переданного диапазона включительно
const getRundomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//возвращает случайный элемент из массива
const getRandomElement = (array) => {
  const randomIndex = getRundomInteger(0, array.length - 1);
  return array[randomIndex];
};

//возвращает случайное число с плавающей точкой из переданного диапазона включительно
function getGeographicCoordinates(min, max, numberOfDecimals) {
  const numRandom = Math.random() * (max - min + 1) + min;
  return numRandom.toFixed(numberOfDecimals);
}

//создает массив случайной длины из значений
const getRandomLengthArray = (array) => {
  const randomLengthArray = array.slice(
    0,
    getRundomInteger(0, array.length - 1),
  );

  return randomLengthArray;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export {
  getRundomInteger,
  getRandomElement,
  getGeographicCoordinates,
  getRandomLengthArray,
  showAlert,
  isEscEvent
};
