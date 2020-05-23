import React from 'react';
import PropTypes from 'prop-types';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { formatTemperature } from '../../../Helpers';
import { PreviousWrapper, Toggle, PreviousDays, PreviousDay } from './styles';

const Previous = ({ weather, previous, metric, handleIsPrevious, handleSelectedSol }) => {
  const showPrevious = () => {
    handleIsPrevious(!previous);
  };

  const clickMoreInfo = (selectedSol) => {
    handleSelectedSol(selectedSol);
  };

  return (
    <PreviousWrapper previous={previous}>
      <Toggle htmlFor="weather-toggle" onClick={showPrevious} previous={previous}>
        <span>
          <FaLongArrowAltUp />
        </span>
        <span className="sr-only">Show previous weather</span>
      </Toggle>

      <h2 className="main-title previous-weather__title">Previous 7 days</h2>
      <PreviousDays>
        {weather.map((sol, i) => (
          <PreviousDay key={sol.sol} previous={previous}>
            <h3 className="previous-day__sol">
              <span>{sol.sol}</span>
            </h3>
            <p className="previous-day__date">{sol.date}</p>
            <p className="previous-day__temp">
              High:
              <span>{formatTemperature(sol.maxTemp, metric)}</span>
              <span>{metric ? ' C' : ' F'}</span>
            </p>
            <p className="previous-day__temp">
              Low:
              <span>{formatTemperature(sol.minTemp, metric)}</span>
              <span>{metric ? ' C' : ' F'}</span>
            </p>
            <button
              className="previous-day__more-info"
              onClick={() => clickMoreInfo(weather[i])}
              type="submit">
              More info
            </button>
          </PreviousDay>
        ))}
      </PreviousDays>
    </PreviousWrapper>
  );
};

export default Previous;

Previous.defaultProps = {
  weather: [],
};

Previous.propTypes = {
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      sol: PropTypes.string.isRequired,
      maxTemp: PropTypes.number.isRequired,
      minTemp: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      windDirectionDegrees: PropTypes.number.isRequired,
      windSpeed: PropTypes.number.isRequired,
    })
  ),
  metric: PropTypes.bool.isRequired,
  previous: PropTypes.bool.isRequired,
  handleIsPrevious: PropTypes.func.isRequired,
  handleSelectedSol: PropTypes.func.isRequired,
};
