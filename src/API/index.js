import { NasaApiQuery } from './NasaApiQuery';
import { POD_URL } from '../Config';

// GET Picture of the day 
export const getPod = NasaApiQuery(() => {
    return `${POD_URL}`;
});

console.log("POD >> ", getPod());