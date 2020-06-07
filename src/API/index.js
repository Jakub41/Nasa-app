import NasaApiQuery from './NasaApiQuery';
import { POD_URL, W_MARS_URL, ROVER_MANIFEST, ROVER_PHOTOS } from '../Config';

// GET Picture of the day
export const getPod = NasaApiQuery(() => `${POD_URL}&api_key=`);

// GET Mars Weather
export const getWeatherMars = NasaApiQuery(() => `${W_MARS_URL}&ver=1.0&api_key=`);

// GET Rover Manifest
export const getRoverManifest = NasaApiQuery((rover) => `${ROVER_MANIFEST}${rover}?&api_key=`);

// GET Pictures of a Rover
export const getRoverPhotos = NasaApiQuery(
  (roverName, earthDate, camera) =>
    `${ROVER_PHOTOS}${roverName}/photos?earth_date=${earthDate}&camera=${camera}&api_key=`
);

// console.log(getRoverPhotos('curiosity', '2020-6-1', 'NAVCAM'));
