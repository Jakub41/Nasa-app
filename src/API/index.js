import { POD_URL } from '../Config';
import { NasaApiQuery } from './NasaApiQuery';

// GET Picture of the day 
export const getPod = NasaApiQuery(() => {
    return `${POD_URL}`;
})