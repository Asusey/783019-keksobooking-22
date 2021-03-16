import {totalArray} from './data.js';

const announcementCardTemplate = document.querySelector('#card').content.querySelector('.popup');
const typeMapper = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
}

//создаем список преимуществ
const createFeatures = (featuresList) => {
  const featuresContainer = document.createDocumentFragment();

  featuresList.forEach((feature) => {
    const featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
    featuresContainer.appendChild(featureElement);
  });
  return featuresContainer;
}

//создаем список фотографий
const createPhotos = (photosList, template) => {
  const photosContainer = document.createDocumentFragment();

  photosList.forEach((search) => {
    const photoElement = template.cloneNode(true);
    photoElement.src = search;
    photosContainer.appendChild(photoElement)
  });
  return photosContainer;
}

const createCards = (data) => {
  const cards = [];

  data.forEach((card) => {
    const cardElement = announcementCardTemplate.cloneNode(true);

    cardElement.querySelector('.popup__title').textContent = card.offer.title;
    cardElement.querySelector('.popup__text--address').textContent = `${card.offer.address.X}, ${card.offer.address.Y}`;
    cardElement.querySelector('.popup__text--price').textContent =
    card.offer.price + ' ₽/ночь';
    cardElement.querySelector('.popup__type').textContent = typeMapper[card.offer.type];
    cardElement.querySelector('.popup__text--capacity').textContent =
    card.offer.rooms + ' комнаты для ' + card.offer.guests + ' гостей';
    cardElement.querySelector('.popup__text--time').textContent =
    'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout;
    //.popup__feature
    const features = createFeatures(card.offer.features, cardElement.querySelector('.popup__feature'));
    cardElement.querySelector('.popup__features').innerHTML = '';
    cardElement.querySelector('.popup__features').appendChild(features);

    cardElement.querySelector('.popup__description').textContent = card.offer.description;
    //.popup__photos
    const photos = createPhotos(card.offer.photos, cardElement.querySelector('.popup__photo'));
    cardElement.querySelector('.popup__photos').innerHTML = '';
    cardElement.querySelector('.popup__photos').appendChild(photos);

    cardElement.querySelector('.popup__avatar').src = card.author.avatar;
    cards.push(cardElement);
  });
  return cards;
}

const cards = createCards(totalArray);

export {cards};
