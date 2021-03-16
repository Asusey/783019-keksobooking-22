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
  const randomLengthArray = array.slice(0, getRundomInteger(0, array.length - 1));

  return randomLengthArray;
};

export {
  getRundomInteger,
  getRandomElement,
  getGeographicCoordinates,
  getRandomLengthArray
};
