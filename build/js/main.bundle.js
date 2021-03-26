(()=>{"use strict";const e=e=>{const t=document.createElement("div");t.style.zIndex=100,t.style.position="absolute",t.style.left=0,t.style.top=0,t.style.right=0,t.style.padding="10px 3px",t.style.fontSize="30px",t.style.textAlign="center",t.style.backgroundColor="red",t.textContent=e,document.body.append(t),setTimeout((()=>{t.remove()}),5e3)},t=e=>"Escape"===e.key||"Esc"===e.key,o=document.querySelector("#success").content.querySelector(".success"),r=document.querySelector("#error").content.querySelector(".error"),a=document.querySelector("main"),n=document.querySelector("#card").content.querySelector(".popup"),l={flat:"Квартира",bungalow:"Бунгало",house:"Дом",palace:"Дворец"},d=35.6895,c=139.69171;let i=null,s=[];const u=window.L.icon({iconUrl:"./img/main-pin.svg",iconSize:[52,52],iconAnchor:[26,52]}),p=window.L.marker({lat:d,lng:c},{draggable:!0,icon:u}),m=e=>{const t=e.slice(0,10),o=(e=>{const t=[];return e.forEach((e=>{const o=n.cloneNode(!0);o.querySelector(".popup__title").textContent=e.offer.title,o.querySelector(".popup__text--address").textContent=e.offer.address,o.querySelector(".popup__text--price").textContent=e.offer.price+" ₽/ночь",o.querySelector(".popup__type").textContent=l[e.offer.type],o.querySelector(".popup__text--capacity").textContent=e.offer.rooms+" комнаты для "+e.offer.guests+" гостей",o.querySelector(".popup__text--time").textContent="Заезд после "+e.offer.checkin+", выезд до "+e.offer.checkout;const r=(e=>{const t=document.createDocumentFragment();return e.forEach((e=>{const o=document.createElement("li");o.classList.add("popup__feature",`popup__feature--${e}`),t.appendChild(o)})),t})(e.offer.features,o.querySelector(".popup__feature"));o.querySelector(".popup__features").innerHTML="",o.querySelector(".popup__features").appendChild(r),o.querySelector(".popup__description").textContent=e.offer.description;const a=((e,t)=>{const o=document.createDocumentFragment();return e.forEach((e=>{const r=t.cloneNode(!0);r.src=e,o.appendChild(r)})),o})(e.offer.photos,o.querySelector(".popup__photo"));o.querySelector(".popup__photos").innerHTML="",o.querySelector(".popup__photos").appendChild(a),o.querySelector(".popup__avatar").src=e.author.avatar,t.push(o)})),t})(t);t.forEach(((e,t)=>{const r=window.L.icon({iconUrl:"./img/pin.svg",iconSize:[40,40],iconAnchor:[20,40]});window.L.marker({lat:e.location.lat,lng:e.location.lng},{draggable:!1,icon:r,adPin:!0}).addTo(i).bindPopup(o[t])}))},y=()=>{f(),m(s)},f=()=>{i.eachLayer((e=>{e.options.adPin&&e.remove()}))},v=["gif","jpg","jpeg","png"],g=document.querySelector(".ad-form__field .ad-form-header__input"),h=document.querySelector(".ad-form-header__preview"),_=document.querySelector(".ad-form-header__preview img"),S=document.querySelector(".ad-form__upload .ad-form__input"),q=document.querySelector(".ad-form__photo-container"),b=document.querySelector(".ad-form__photo");g.addEventListener("change",(()=>{const t=g.files[0],o=t.name.toLowerCase();if(v.some((e=>o.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{_.src=e.result})),e.readAsDataURL(t)}else e("Пожалуйста, загрузите фото с расширением .jpeg или .png")})),S.addEventListener("change",(()=>{const e=S.files;for(let t=0;t<e.length;t++){const o=e[t],r=o.name.toLowerCase();if(v.some((e=>r.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{b.remove();const t=document.createElement("img"),o=document.createElement("div");t.src=e.result,t.alt="Фото жилья",t.width=70,t.height=70,o.classList.add("ad-form__photo"),o.appendChild(t),q.appendChild(o)})),e.readAsDataURL(o)}}}));const L=()=>{document.querySelectorAll(".ad-form__photo").forEach(((e,t)=>{0===t?e.querySelector("img")&&e.querySelector("img").remove():e.remove()})),h.children[0].src="img/muffin-grey.svg"},w=document.querySelector(".map__filters"),E=w.querySelector("#housing-type"),C=w.querySelector("#housing-price"),k=w.querySelector("#housing-rooms"),x=w.querySelector("#housing-guests"),A=w.querySelectorAll(".map__checkbox"),D=()=>{w.reset()},V=document.querySelector(".ad-form"),F=V.querySelector("#type"),T=V.querySelector("#price"),$=V.querySelector("#address"),j=V.querySelector(".ad-form__element--time"),z=V.querySelector("#timein"),U=V.querySelector("#timeout"),M=V.querySelector(".ad-form__reset"),N={bungalow:0,flat:1e3,house:5e3,palace:1e4};F.addEventListener("change",(e=>{T.placeholder=N[e.target.value],T.setAttribute("min",N[e.target.value])})),j.addEventListener("change",(e=>{U.value=e.target.value,z.value=e.target.value}));const P=()=>{V.reset(),L(),D(),y(),p.setLatLng({lat:d,lng:c}),$.value=`${d}, ${c}`};M.addEventListener("click",(e=>{e.preventDefault(),P(),L(),D(),y()}));const R=document.querySelector("#title"),O=V.querySelector("#price"),H=V.querySelector("#room_number"),W=V.querySelector("#capacity"),I=V.elements,B=V.querySelectorAll("#capacity option"),G={1:["1"],2:["1","2"],3:["1","2","3"],100:["0"]};(()=>{for(let e=0;e<I.length;e++)I[e].addEventListener("invalid",(e=>{e.target.style.border="solid 3px red"})),I[e].addEventListener("input",(e=>{e.target.style.border="none"}))})();const J=document.querySelector(".map__filters"),K=J.querySelectorAll(".map__filter"),Q=J.querySelector(".map__features"),X=V.querySelector(".ad-form-header"),Y=V.querySelectorAll(".ad-form__element"),Z=(e,t)=>{e.forEach((e=>{e.disabled=t}))};var ee,te;J.classList.add("ad-form--disabled"),Z(K,!0),Q.setAttribute("disabled","disabled"),V.classList.add("ad-form--disabled"),X.setAttribute("disabled","disabled"),Z(Y,!0),$.setAttribute("readonly",""),R.addEventListener("input",(()=>{const e=R.value.length;e<30?R.setCustomValidity("Введите ещё "+(30-e)+" симв."):e>100?R.setCustomValidity("Удалите лишние "+(e-100)+" симв."):R.setCustomValidity(""),R.reportValidity()})),O.addEventListener("input",(()=>{O.validity.rangeOverflow?O.setCustomValidity("Цена за ночь не должна превышать 1000000"):O.validity.rangeUnderflow?O.setCustomValidity("Цена за ночь не может быть меньше "+O.min):O.validity.valueMissing?O.setCustomValidity("Поле, обязательное для заполнения"):O.setCustomValidity("")})),H.addEventListener("change",(e=>{const t=G[e.target.value];W.querySelectorAll("option").forEach((e=>{t.includes(e.value)?(e.removeAttribute("disabled"),W.value=e.value):e.setAttribute("disabled","disabled")}))})),ee=()=>{const e=o.cloneNode(!0);a.appendChild(e),document.addEventListener("click",(()=>{e.remove()})),document.addEventListener("keydown",(o=>{t(o)&&(o.preventDefault(),e.remove())}))},te=()=>{const e=r.cloneNode(!0);a.appendChild(e),e.querySelector(".error__button").addEventListener("click",(()=>{e.remove(),document.addEventListener("click",(()=>{e.remove()})),document.addEventListener("keydown",(o=>{t(o)&&(o.preventDefault(),e.remove())}))}))},V.addEventListener("submit",(e=>{e.preventDefault(),((e,t,o)=>{fetch("https://22.javascript.pages.academy/keksobooking",{method:"POST",body:o}).then((o=>{o.ok?e():t()})).catch((()=>{t()}))})((()=>{ee(),P()}),(()=>te()),new FormData(e.target))})),i=window.L.map("map-canvas").on("load",(()=>{J.classList.remove("ad-form--disabled"),Z(K,!1),Q.removeAttribute("disabled","disabled"),V.classList.remove("ad-form--disabled"),X.removeAttribute("disabled","disabled"),Z(Y,!1),B.forEach((e=>{e.selected||e.setAttribute("disabled","disabled")})),$.value=`${d}, ${c}`})).setView({lat:d,lng:c},10),window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(i),p.addTo(i),p.on("moveend",(e=>{$.value=`${e.target.getLatLng().lat.toFixed(5)}, ${e.target.getLatLng().lng.toFixed(5)}`})),((e,t)=>{fetch("https://22.javascript.pages.academy/keksobooking/data").then((e=>e.json())).then((t=>{e(t)})).catch((()=>{t("Данные сервера получены не в полном объёме")}))})((e=>{s=e,m(e)}),e),w.addEventListener("change",window._.debounce((()=>{(e=>{f();let t=s.filter((e=>!(E.value!==e.offer.type&&"any"!==E.value||!("low"===C.value&&e.offer.price<1e4||"high"===C.value&&e.offer.price>5e4||"middle"===C.value&&e.offer.price>=1e4&&e.offer.price<=5e4||"any"===C.value)||k.value!==e.offer.rooms.toString()&&"any"!==k.value||x.value!==e.offer.guests.toString()&&"any"!==x.value||Array.from(A).filter((e=>e.checked)).some((t=>!e.offer.features.includes(t.value))))));m(t)})()}),500))})();
//# sourceMappingURL=main.bundle.js.map