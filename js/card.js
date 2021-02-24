import {totalArray} from './data.js';

const blockForMap = document.querySelector('.map__canvas');
const announcementCardTemplate = document.querySelector('#card').content.querySelector('.popup');


//blockForMap.appendChild(cardElement);


//const similarCardElements = totalArray();
const typeMapper = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
}
//const key = 'flat';
//console.log(typeMapper[key]);


/*const createPhotoElement = () => {
//находим, куда будем клонировать
const blockForPhoto = document.querySelector('.popup__photos');
//находим то, что будем клонировать
const popupPhotoElement = document.querySelector('.popup__photo');

blockForPhoto.innerHTML = '';

for (let i =0; i < offer.photos.lenghth; i++) {
const photo = popupPhotoElement.cloneNode(true);
blockForPhoto.appendChild(photo);
}*/


const createCards = (data) => {
  const cards = [];

  data.forEach((card) => {
    console.log(card);
    const cardElement = announcementCardTemplate.cloneNode(true);

    cardElement.querySelector('.popup__title').textContent = card.offer.title;
    cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
    cardElement.querySelector('.popup__text--price').textContent =
    card.offer.price + ' ₽/ночь';
    cardElement.querySelector('.popup__type').textContent = typeMapper[card.offer.type];
    cardElement.querySelector('.popup__text--capacity').textContent =
    card.offer.rooms + ' комнаты для ' + card.offer.guests + ' гостей';
    cardElement.querySelector('.popup__text--time').textContent =
    'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout;
    cardElement.querySelector('.popup__features').textContent = card.offer.features.join(', ');
    cardElement.querySelector('.popup__description').textContent = card.offer.description;
    //.popup__photos


    cards.push(cardElement);
  });
  return cards;
}

const cards = createCards(totalArray);

blockForMap.appendChild(cards[0]);
