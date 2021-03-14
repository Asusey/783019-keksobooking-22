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

/*возвращает уникальное число из переданного диапазона включительно
const getRandomUniqueInteger = (min, max) => {
  const previousValues = [];

  let currentValue = getRundomInteger(min, max);
  while (previousValues.includes(currentValue)) {
    currentValue = getRundomInteger(min, max);
  }
  previousValues.push(currentValue);
  return currentValue;
};

//возвращает случайный уникальный элемент из массива
const getRandomUniqueElement = (array) => {
  const UniqueIndex = getRandomUniqueInteger(0, array.length - 1);
  return array[UniqueIndex];
};*/

//возвращает случайное число с плавающей точкой из переданного диапазона включительно
function getGeographicCoordinates(min, max, numberOfDecimals) {
  //min = Math.ceil(min);
  //max = Math.floor(max);

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
