import NasaApiQuery from './NasaApiQuery';
import { POD_URL, W_MARS_URL } from '../Config';

// GET Picture of the day
export const getPod = NasaApiQuery(() => `${POD_URL}`);

// GET Mars Weather
export const getWeatherMars = NasaApiQuery(() => `${W_MARS_URL}`);
