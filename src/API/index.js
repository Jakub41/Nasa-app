import NasaApiQuery from './NasaApiQuery';
import { POD_URL, W_MARS_URL, ROVER_MANIFEST, ROVER } from '../Config';

// GET Picture of the day
export const getPod = NasaApiQuery(() => `${POD_URL}/?hd=true`);

// GET Mars Weather
export const getWeatherMars = NasaApiQuery(() => `${W_MARS_URL}/?ver=1.0&feedtype=json`);

// GET Rover
export const getRoverManifest = NasaApiQuery((rover) => `${ROVER_MANIFEST}/${rover}/?`);

// GET Pictures of a Rover
export const getRoverPhotosBySol = NasaApiQuery(
  (roverName, solNumber, camera, pageNumber) =>
    `${ROVER}${roverName}/photos?sol=${solNumber}&camera=${camera}&page=${pageNumber}`
);

// GET Rover information
export const getRoverInfo = NasaApiQuery((roverName) => `${ROVER}${roverName}?`);
