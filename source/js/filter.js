import { onFilterPins } from './map.js';

const MAP_FILTERS = document.querySelector('.map__filters');
const HOUSING_TYPE = MAP_FILTERS.querySelector('#housing-type');
const HOUSING_PRICE = MAP_FILTERS.querySelector('#housing-price');
const HOUSING_ROOMS = MAP_FILTERS.querySelector('#housing-rooms');
const HOUSING_GUESTS = MAP_FILTERS.querySelector('#housing-guests');
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
        return true;
      });
    }, RERENDER_DELAY),
  );
};

const resetFilterForm = () => {
  MAP_FILTERS.reset();
};

export { initFilters, resetFilterForm };
