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

export const isEmpty = (obj) => {
  return Object.keys(obj).length !== 0;
};

export const checkSelected = (isSelected, actual, value, isMetric) => {
  if (value === 'maxTemp' || value === 'minTemp') {
    if (isEmpty(isSelected)) return formatTemperature(isSelected[value], isMetric);

    return formatTemperature(actual[value], isMetric);
  }

  if (value === 'windSpeed') {
    if (isEmpty(isSelected)) return formatWindSpeed(isSelected[value], isMetric);

    return formatWindSpeed(actual[value], isMetric);
  }

  return isEmpty(isSelected) ? isSelected[value] : actual[value];
};
