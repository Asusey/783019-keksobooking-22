import { onFilterPins } from './map.js';

const MAP_FILTERS = document.querySelector('.map__filters');
const HOUSING_TYPE = MAP_FILTERS.querySelector('#housing-type');
const HOUSING_PRICE = MAP_FILTERS.querySelector('#housing-price');
const HOUSING_ROOMS = MAP_FILTERS.querySelector('#housing-rooms');
const HOUSING_GUESTS = MAP_FILTERS.querySelector('#housing-guests');
const FILTER_CHECKBOX = MAP_FILTERS.querySelectorAll('.map__checkbox');
const RERENDER_DELAY = 500;

const validateType = (ad) =>
  HOUSING_TYPE.value === ad.offer.type || HOUSING_TYPE.value === 'any';

const validatePrice = (ad) =>
  (HOUSING_PRICE.value === 'low' && ad.offer.price < 10000) ||
  (HOUSING_PRICE.value === 'high' && ad.offer.price > 50000) ||
  (HOUSING_PRICE.value === 'middle' &&
    ad.offer.price >= 10000 &&
    ad.offer.price <= 50000) ||
  HOUSING_PRICE.value === 'any';

const validateRooms = (ad) =>
  HOUSING_ROOMS.value === ad.offer.rooms.toString() ||
  HOUSING_ROOMS.value === 'any';

const validateGuests = (ad) =>
  HOUSING_GUESTS.value === ad.offer.guests.toString() ||
  HOUSING_GUESTS.value === 'any';

const valedateFeatures = (ad) => {
  const requestedFeatures = Array.from(FILTER_CHECKBOX).filter(
    (element) => element.checked,
  );

  return requestedFeatures.every((element) =>
    ad.offer.features.includes(element.value),
  );
};

const initFilters = () => {
  MAP_FILTERS.addEventListener(
    'change',
    window._.debounce(() => {
      onFilterPins(
        (ad) =>
          validateType(ad) &&
          validatePrice(ad) &&
          validateRooms(ad) &&
          validateGuests(ad) &&
          valedateFeatures(ad),
      );
    }, RERENDER_DELAY),
  );
};

const resetFilterForm = () => {
  MAP_FILTERS.reset();
};

export { initFilters, resetFilterForm };
