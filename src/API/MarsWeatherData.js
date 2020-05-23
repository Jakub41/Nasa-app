/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { getWeatherMars } from '.';
import { formatDate } from '../Helpers';

export const MarsWeatherData = async () => {
  try {
    const weather = await getWeatherMars();
    const marsWeather = weather.sol_keys.map((solKey) => {
      return {
        sol: solKey,
        maxTemp: weather[solKey].AT?.mx || 'No data',
        minTemp: weather[solKey].AT?.mn || 'No data',
        windSpeed: Math.round(weather[solKey].HWS?.av || 0),
        windDirectionDegrees: weather[solKey].WD?.most_common?.compass_degrees || 0,
        date: formatDate(new Date(weather[solKey].First_UTC)),
      };
    });

    return marsWeather;
  } catch (error) {
    throw new Error(error);
  }
};
