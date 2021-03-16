import {
  getRundomInteger,
  getRandomElement,
  getGeographicCoordinates,
  getRandomLengthArray
} from './util.js';

//Генерация данных

//длина итогового массива
const TOTAL_COUNT = 10;

//для объекта author
const MIN_AVATAR_DIGIT = 1;
const MAX_AVATAR_DIGIT = 8;

//для объекта offer
const OFFER_TITLES = [
  'Шикарное место',
  'Лучше места не найдёшь',
  'Сюда ни ногой',
  'Всем рекомендую',
  'Идеально для отдыха всей семьёй',
];

const MIN_OFFER_PRICE = 10000;
const MAX_OFFER_PRICE = 60000;
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow'];
const MIN_OFFER_ROOMS = 1;
const MAX_OFFER_ROOMS = 6;
const MIN_OFFER_GUESTS = 1;
const MAX_OFFER_GUESTS = 12;
const OFFER_CHECKIN_HOURS = ['12:00', '13:00', '14:00'];
const OFFER_CHECKOUT_HOURS = ['12:00', '13:00', '14:00'];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const OFFER_DESCRIPTIONS = [
  'Здесь очень чисто и красиво',
  'В уборной тараканы, но вид из окна прекрасен',
  'С пивом покатит',
  'Недавно сделан ремонт, всё идеально',
  'Белые стены, чистое бельё',
];

const OFFER_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

//для объекта location
const MIN_X_LOCATION = 35.65;
const MAX_X_LOCATION = 35.7;
const MIN_Y_LOCATION = 139.7;
const MAX_Y_LOCATION = 139.8;

//генерирует объект location
const getLocation = () => {
  const X = getGeographicCoordinates(MIN_X_LOCATION, MAX_X_LOCATION, 5);
  const Y = getGeographicCoordinates(MIN_Y_LOCATION, MAX_Y_LOCATION, 5);

  return {X, Y};
};

//генерирует объект author
const getAuthor = () => {
  return {
    avatar:
      'img/avatars/user' +
      0 +
      getRundomInteger(MIN_AVATAR_DIGIT, MAX_AVATAR_DIGIT) +
      '.png',
  };
};

//генерирует объект из заданных свойств
const createObject = () => {
  return {
    author: getAuthor(),
    offer: {
      title: getRandomElement(OFFER_TITLES),
      address: getLocation(),
      price: getRundomInteger(MIN_OFFER_PRICE, MAX_OFFER_PRICE),
      type: getRandomElement(OFFER_TYPES),
      rooms: getRundomInteger(MIN_OFFER_ROOMS, MAX_OFFER_ROOMS),
      guests: getRundomInteger(MIN_OFFER_GUESTS, MAX_OFFER_GUESTS),
      checkin: getRandomElement(OFFER_CHECKIN_HOURS),
      checkout: getRandomElement(OFFER_CHECKOUT_HOURS),
      features: getRandomLengthArray(OFFER_FEATURES),
      description: getRandomElement(OFFER_DESCRIPTIONS),
      photos: getRandomLengthArray(OFFER_PHOTOS),
    },
    location: getLocation(),
  };
};

//создаём новый массив объектов
const totalArray = new Array(TOTAL_COUNT).fill(null).map(() => createObject());

export {totalArray};
