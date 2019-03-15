import { getGeocodedAddresses } from './location-service.js';

async function run() {
  const data = await getGeocodedAddresses("1600 Amphitheatre Parkway, Mountain View, CA");
  console.log(data);
}

run();
