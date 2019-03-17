const searchResults = document.querySelector(".search-results");

const renderResultItem = data => {
  const { formatted_address } = data;
  const { lat, lng } = data.geometry.location;
  return `
    <li data-lat=${lat} data-lng=${lng} class="search-resultsItem">
      <span class="search-resultsItem-address">${formatted_address}</span>
      <span class="search-resultsItem-position">
        <span>lng: ${lng}</span>
        <span>lat: ${lat}</span>
      </span>
    </li>
  `;
}

const renderResultList = results => {
  let searchResultsInnerHTML = renderNoResultFound();
  if (results.length) {
    searchResultsInnerHTML = `${results.map(renderResultItem).join('')}`;
  }
  searchResults.innerHTML = searchResultsInnerHTML;
}

const renderNoResultFound = () => `<li class="search-resultsItem-noresult">No results to be shown</li>`

document.addEventListener("searchResults", e => {
  renderResultList(e.detail.results);
});

searchResults.addEventListener("click", e => {
  const lng = Number.parseFloat(e.target.getAttribute("data-lng"));
  const lat = Number.parseFloat(e.target.getAttribute("data-lat"));
  const resultItemClickEvent = new CustomEvent("resultItemClick", {
    detail: { lng, lat },
    bubbles: true
  });
  searchResults.dispatchEvent(resultItemClickEvent);
});

