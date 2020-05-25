import PropTypes from 'prop-types';
import React from 'react';
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { Wrapper, Date, Temp, Wind } from './styles';
import { formatTemperature, formatWindSpeed } from '../../../Helpers';

const WeatherMarsData = ({ sol, isMetric, setSelectedSol }) => (
  <Wrapper>
    <Date>
      <h2>
        {setSelectedSol ? setSelectedSol.sol : sol.sol}
        Sol
      </h2>
      <p>{setSelectedSol ? setSelectedSol.date : sol.date}</p>
    </Date>
    <Temp>
      <h2 className="section-title">Temperature</h2>
      <p className="reading">
        <FaTemperatureHigh />
        <span>
          {' '}
          {setSelectedSol
            ? formatTemperature(setSelectedSol.maxTemp, isMetric)
            : formatTemperature(sol.maxTemp, isMetric)}
        </span>
        <span> {isMetric ? <RiCelsiusLine /> : <RiFahrenheitLine />}</span>
      </p>
      <p className="reading">
        <FaTemperatureLow />
        <span>
          {' '}
          {setSelectedSol
            ? formatTemperature(setSelectedSol.minTemp, isMetric)
            : formatTemperature(sol.minTemp, isMetric)}
        </span>
        <span> {isMetric ? <RiCelsiusLine /> : <RiFahrenheitLine />}</span>
      </p>
    </Temp>

    <Wind deg={setSelectedSol ? setSelectedSol.windDirectionDegrees : sol.windDirectionDegrees}>
      <h2 className="section-title">Wind</h2>
      <p className="reading">
        <span>
          {setSelectedSol
            ? formatWindSpeed(setSelectedSol.windSpeed, isMetric)
            : formatWindSpeed(sol.windSpeed, isMetric)}
        </span>
        <span>{isMetric ? ' kph' : ' mph'}</span>
      </p>

      <div className="wind__direction">
        <div className="wind__arrow" />
      </div>
    </Wind>
  </Wrapper>
);

export default WeatherMarsData;

WeatherMarsData.defaultProps = {
  setSelectedSol: {
    sol: '',
    maxTemp: 0,
    minTemp: 0,
    date: '',
    windDirectionDegrees: 0,
    windSpeed: 0,
  },
  sol: {},
};

WeatherMarsData.propTypes = {
  isMetric: PropTypes.bool.isRequired,
  setSelectedSol: PropTypes.shape({
    sol: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    windDirectionDegrees: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
  }),
  sol: PropTypes.shape({
    sol: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    windDirectionDegrees: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
  }),
};
