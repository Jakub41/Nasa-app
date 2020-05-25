import NasaApiQuery from './NasaApiQuery';
import { POD_URL, W_MARS_URL, ROVER_MANIFEST } from '../Config';

// GET Picture of the day
export const getPod = NasaApiQuery(() => `${POD_URL}&api_key=`);

// GET Mars Weather
export const getWeatherMars = NasaApiQuery(() => `${W_MARS_URL}&ver=1.0&api_key=`);

// GET Rover Manifest
export const getRoverManifest = NasaApiQuery((rover) => `${ROVER_MANIFEST}${rover}?&api_key=`);
