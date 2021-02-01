// Возвращает случайное целое число из переданного диапазона включительно

let getRundomInteger = function getRandomIntegerInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRundomInteger();

// Возвращает случайное число с плавающей точкой из переданного диапазона включительно

let getGeographicCoordinates = function getRundomIntegerFloatingComma (min, max, numberOfDecimals) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let numRandom = ((Math.random() * (max - min + 1) + min));
  numRandom = numRandom.toFixed(numberOfDecimals);
  return numRandom;
}

getGeographicCoordinates();
