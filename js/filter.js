import { onFilterPins, ads } from './map.js';

const MAP_FILTERS = document.querySelector('.map__filters');
const HOUSING_TYPE = MAP_FILTERS.querySelector('#housing-type');
const HOUSING_PRICE = MAP_FILTERS.querySelector('#housing-price');
const HOUSING_ROOMS = MAP_FILTERS.querySelector('#housing-rooms');
const HOUSING_GUESTS = MAP_FILTERS.querySelector('#housing-guests');
const HOUSING_FEATURES = MAP_FILTERS.querySelector('#housing-features');



MAP_FILTERS.addEventListener('change', () => {
  onFilterPins(ads => {
    if (HOUSING_TYPE.value !== ads.offer.type && HOUSING_TYPE.value !== 'any') {
      return false;
    }

    if (!(HOUSING_PRICE.value === 'low' && ads.offer.price < 10000 ||
    HOUSING_PRICE.value === 'high' && ads.offer.price > 50000 ||
    HOUSING_PRICE.value === 'middle' && ads.offer.price >= 10000 && ads.offer.price <= 50000 || HOUSING_PRICE.value === 'any')) {
      return false;
    }

    if (HOUSING_ROOMS.value !== ads.offer.rooms.toString() && HOUSING_ROOMS.value !== 'any') {
      return false;
    }

    if (HOUSING_GUESTS.value !== ads.offer.guests.toString() && HOUSING_GUESTS.value !== 'any') {
      return false;
    }
    return true;
  });


});

// const getFilterByType = (type) => {
//   HOUSING_TYPE.value === 'any' || type === HOUSING_TYPE.value;
//}

HOUSING_FEATURES.addEventListener('change', () => {

  //console.log(evt);
  const FILTER_CHECKBOX = MAP_FILTERS.querySelectorAll('.map__checkbox');
  let result = {};
  FILTER_CHECKBOX.forEach((element) => {
    //console.log(element.checked);
    ads.forEach((ad) => {
      const isInclude = ad.offer.features.includes(element.value);
      if (isInclude) {
        result[ad.offer.address] = ad;
      }
    })
  });
  //console.log(result);
  const filteredResult = Object.values(result);
  console.log(filteredResult);
});
