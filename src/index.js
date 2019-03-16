import { getGeocodedAddresses } from './services/location-service';
import './index.scss';

let map;
let marker;

async function run() {
  const data = await getGeocodedAddresses("Amphitheatre Parkway, Mountain View, CA");
  console.log(data.results[0].geometry.location);
  renderPosition(data.results[0].geometry.location)
}

function renderPosition(position) {
  if (!map) {
    setTimeout(() => renderPosition(position), 500);
    return;
  }
  map.setCenter(position);
  map.setZoom(12);
  if (!marker) {
    marker = new google.maps.Marker({ map: map, position });
  }
  else {
    marker.setPosition(position);
  }
}


window.initMap = function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  var someothreplace = { lat: 0, lng: 0 };

  // The map, centered at Uluru
  map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 2,
    center: uluru,
    mapTypeControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  });
  // The marker, positioned at Uluru
  // marker = new google.maps.Marker({ map: map });

  // setTimeout(() => {
  //   marker.setPosition(someothreplace);
  //   map.setCenter(someothreplace);
  // }, 3000);

  // new google.maps.Marker({ position: someothreplace, map: map });

}

run();
