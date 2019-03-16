const API_KEY = "AIzaSyBl44gBdXcetwIdfY7TtKZbM01GDTsZXRA"

export const getGeocodedAddresses = async addressQuery => {
  const address = addressQuery;
  const escapedAddress = address.replace(" ", "+");
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${escapedAddress}&key=${API_KEY}`;
  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();

  return data;
}