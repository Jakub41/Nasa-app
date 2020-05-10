import { NasaApiQuery } from './NasaApiQuery';
import { POD_URL, W_MARS_URL } from '../Config';

// GET Picture of the day
export const getPod = NasaApiQuery(() => {
    return `${POD_URL}`;
});

// GET Mars Weather
export const getWeatherMars = NasaApiQuery(() => {
  return `${W_MARS_URL}`;
});

console.log("POD >> ", getPod());
console.log("Mars Weather >> ", getWeatherMars());
