import { setFormActive } from './disabled.js';
import { ADDRESS } from './form.js';
import { createCards } from './card.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

const LAT = 35.6895;
const LNG = 139.69171;
const ZOOM = 10;

let map = null;
let ads = [];

//главный маркер
const mainPinIcon = window.L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = window.L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

//'обычные' маркеры
const addPins = (data) => {
  const slicedPins = data.slice(0, 10);
  const cards = createCards(slicedPins);
  slicedPins.forEach((obj, i) => {
    const ordinaryPinIcon = window.L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const ordinaryPinMarker = window.L.marker(
      {
        lat: obj.location.lat,
        lng: obj.location.lng,
      },
      {
        draggable: false,
        icon: ordinaryPinIcon,
        adPin: true,
      },
    );

    ordinaryPinMarker.addTo(map).bindPopup(cards[i]);
  });
};

const resetPins = () => {
  removePins();
  addPins(ads);
}

const initMap = () => {
  //создаём и отрисовываем карту
  map = window.L.map('map-canvas')
    .on('load', () => {
      setFormActive();
      ADDRESS.value = `${LAT}, ${LNG}`;
    })
    .setView(
      {
        lat: LAT,
        lng: LNG,
      },
      ZOOM,
    );

  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    //записываем координаты после перемещения метки в строку адреса
    ADDRESS.value = `${evt.target
      .getLatLng()
      .lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
  });

  getData(onSuccess, showAlert);
};

const removePins = () => {
  map.eachLayer(layer => {
    if (layer.options.adPin) {
      layer.remove()
    }
  });
}

const onSuccess = (data) => {
  ads = data;
  addPins(data);
}

const onFilterPins = (filter) => {
  removePins();
  let data = ads.filter(filter);
  addPins(data);
}

export { mainPinMarker, LAT, LNG,  initMap, onFilterPins, resetPins };
