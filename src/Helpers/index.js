export const formatDate = (date) =>
  date.toLocaleDateString(undefined, { day: 'numeric', month: 'long' });

export const formatTemperature = (temperature, isMetric) => {
  let returnTemp = temperature;
  if (!isMetric) {
    returnTemp = (temperature - 32) * (5 / 9);
  }
  return Math.round(returnTemp);
};

export const formatWindSpeed = (speed, isMetric) => {
  let returnSpeed = speed;
  if (!isMetric) {
    returnSpeed = speed / 1.609344;
  }
  return Math.round(returnSpeed);
};
