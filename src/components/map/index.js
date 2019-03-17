let map;
let marker;
const origin = { lat: 0, lng: 0 };

function renderPosition(position) {
  if (!map) {
    setTimeout(() => renderPosition(position), 500);
    return;
  }
  map.setZoom(10);
  map.setCenter(position);
  if (!marker) {
    marker = new google.maps.Marker({ map: map, position });
  }
  else {
    marker.setPosition(position);
    marker.setMap(map);
  }
}

function removeMarker() {
  if (marker) {
    marker.setMap(null);
  }
}

document.addEventListener("searchResults", e => {
  if (e.detail.results.length) {
    renderPosition(e.detail.results[0].geometry.location)
  }
  else {
    removeMarker();
    map.setZoom(2);
    map.setCenter(origin)
  }
});

document.addEventListener("resultItemClick", e => {
  renderPosition(e.detail);
});

window.initMap = function initMap() {

  // The map, centered at origin
  map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 2,
    center: origin,
    mapTypeControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false
  });
}

