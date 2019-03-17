/**
 * This files handles any logic or renders related to Search input field
 */

import { debounce } from 'lodash';
import { getGeocodedAddresses } from '../../services/location-service';

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const loadingIndicator = document.querySelector(".search-input-loading");
const searchIcon = document.querySelector(".search-input-fire");

const toggleLoadingIndictor = () => {
  loadingIndicator.classList.toggle("visible");
  searchIcon.classList.toggle("visible");
}

const handleAddressChange = async e => {
  if (e.type === "submit") {
    e.preventDefault();
  }
  if (searchInput.value.length <= 2) {
    return;
  }
  const address = searchInput.value;
  toggleLoadingIndictor();
  const results = await getGeocodedAddresses(address);
  toggleLoadingIndictor();

  if (searchInput.value != address) {
    return;
  }
  const searchResultEvent = new CustomEvent("searchResults", {
    detail: { results },
    bubbles: true
  });
  searchForm.dispatchEvent(searchResultEvent);
};

searchForm.addEventListener('submit', handleAddressChange);

// TODO: autoSearch
searchInput.addEventListener("keyup", debounce(handleAddressChange, 300));
