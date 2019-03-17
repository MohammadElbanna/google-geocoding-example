const API_KEY = "AIzaSyBl44gBdXcetwIdfY7TtKZbM01GDTsZXRA"

export const getGeocodedAddresses = async addressQuery => {
  const address = addressQuery;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;
  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  console.log("data is", data);

  return data.results;
}