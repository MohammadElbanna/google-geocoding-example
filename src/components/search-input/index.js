/**
 * This files handles any logic or renders related to Search input field
 */

import { getGeocodedAddresses } from '../../services/location-service';

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const loadingIndicator = document.querySelector(".search-input-loading");
const searchIcon = document.querySelector(".search-input-fire");

const toggleLoadingIndictor = () => {
  loadingIndicator.classList.toggle("visible");
  searchIcon.classList.toggle("visible");
}


searchForm.addEventListener('submit', async e => {
  e.preventDefault();

  toggleLoadingIndictor();
  const results = await getGeocodedAddresses(searchInput.value);
  toggleLoadingIndictor();
  const searchResultEvent = new CustomEvent("searchResults", {
    detail: { results },
    bubbles: true
  });
  searchForm.dispatchEvent(searchResultEvent);
});

// TODO: autoSearch
searchInput.addEventListener("change", () => { });
