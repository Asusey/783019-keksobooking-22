import {
  setFormActive
} from './disabled.js';

import {
  ADDRESS
} from './form.js';

/*import {
  cards
} from './card.js';*/

const LAT = 35.68950;
const LNG = 139.69171;
const ZOOM = 10;

//создаём и отрисовываем карту
const map = window.L.map('map-canvas')
  .on('load', () => {
    //console.log('Карта инициализирована');
    setFormActive();
    ADDRESS.value = `${LAT}, ${LNG}`;
  })
  .setView({
    lat: LAT,
    lng: LNG,
  }, ZOOM);

window.L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//главный маркер
const mainPinIcon = window.L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

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
mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  //console.log(evt.target.getLatLng());
  //записать координаты после перемещения метки в строку адреса
  ADDRESS.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

/*

//"обычные" маркеры вот тут я совсем зависла,
не понимаю, откуда взять координаты и данные для балунов
cards.forEach((cards) => {
  const ordinaryPinIcon = window.L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const ordinaryPinMarker = window.L.marker(
    {
      lat,
      lng,
    },
    {
      ordinaryPinIcon,
    },
  );

  ordinaryPinMarker
    .addTo(map)
    .bindPopup(cards);
});

*/
