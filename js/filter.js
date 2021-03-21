import { onFilterPins } from './map.js';

const MAP_FILTERS = document.querySelector('.map__filters');
const HOUSING_TYPE = MAP_FILTERS.querySelector('#housing-type');
const HOUSING_PRICE = MAP_FILTERS.querySelector('#housing-price');
const HOUSING_ROOMS = MAP_FILTERS.querySelector('#housing-rooms');
const HOUSING_GUESTS = MAP_FILTERS.querySelector('#housing-guests');
//const HOUSING_FEATURES = MAP_FILTERS.querySelector('#housing-features');
const FILTER_CHECKBOX = MAP_FILTERS.querySelectorAll('.map__checkbox');
const RERENDER_DELAY = 500;

const initFilters = () => {
  MAP_FILTERS.addEventListener(
    'change',
    window._.debounce(() => {
      onFilterPins((ad) => {
        if (
          HOUSING_TYPE.value !== ad.offer.type &&
          HOUSING_TYPE.value !== 'any'
        ) {
          return false;
        }

        if (
          !(
            (HOUSING_PRICE.value === 'low' && ad.offer.price < 10000) ||
            (HOUSING_PRICE.value === 'high' && ad.offer.price > 50000) ||
            (HOUSING_PRICE.value === 'middle' &&
              ad.offer.price >= 10000 &&
              ad.offer.price <= 50000) ||
            HOUSING_PRICE.value === 'any'
          )
        ) {
          return false;
        }

        if (
          HOUSING_ROOMS.value !== ad.offer.rooms.toString() &&
          HOUSING_ROOMS.value !== 'any'
        ) {
          return false;
        }

        if (
          HOUSING_GUESTS.value !== ad.offer.guests.toString() &&
          HOUSING_GUESTS.value !== 'any'
        ) {
          return false;
        }

        const requestedFeatures = Array.from(FILTER_CHECKBOX).filter(
          (element) => element.checked,
        );
        if (
          requestedFeatures.some(
            (element) => !ad.offer.features.includes(element.value),
          )
        ) {
          return false;
        }

        //console.log(Array.from(FILTER_CHECKBOX));
        return true;
      });
    }, RERENDER_DELAY),
  );
};

export { initFilters };

// const getFilterByType = (type) => {
//   HOUSING_TYPE.value === 'any' || type === HOUSING_TYPE.value;
//}

// HOUSING_FEATURES.addEventListener('change', () => {

//   //console.log(evt);

//   let result = {};
//   FILTER_CHECKBOX.forEach((element) => {
//     //console.log(element.checked);
//     ads.forEach((ad) => {
//       const isInclude = ad.offer.features.includes(element.value);
//       if (isInclude) {
//         result[ad.offer.address] = ad;
//       }
//     })
//   });
//   //console.log(result);
//   const filteredResult = Object.values(result);
//   //console.log(filteredResult);
// });
