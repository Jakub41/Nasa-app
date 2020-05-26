import PropTypes from 'prop-types';
import React from 'react';
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { Wrapper, Date, Temp, Wind } from './styles';
import { checkSelected } from '../../../Helpers';

const WeatherMarsData = ({ sol, isMetric, setSelectedSol }) => (
  <Wrapper>
    <Date>
      <h2>
        {checkSelected(setSelectedSol, sol, 'sol')}
        Sol
      </h2>
      <p>{checkSelected(setSelectedSol, sol, 'date')}</p>
    </Date>
    <Temp>
      <h2 className="section-title">Temperature</h2>
      <p className="reading">
        <FaTemperatureHigh />
        <span> {checkSelected(setSelectedSol, sol, 'maxTemp', isMetric)}</span>
        <span> {isMetric ? <RiCelsiusLine /> : <RiFahrenheitLine />}</span>
      </p>
      <p className="reading">
        <FaTemperatureLow />
        <span> {checkSelected(setSelectedSol, sol, 'minTemp', isMetric)}</span>
        <span> {isMetric ? <RiCelsiusLine /> : <RiFahrenheitLine />}</span>
      </p>
    </Temp>

    <Wind deg={checkSelected(setSelectedSol, sol, 'windDirectionDegrees')}>
      <h2 className="section-title">Wind</h2>
      <p className="reading">
        <span>{checkSelected(setSelectedSol, sol, 'windSpeed', isMetric)}</span>
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
    sol: PropTypes.string,
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number,
    date: PropTypes.string,
    windDirectionDegrees: PropTypes.number,
    windSpeed: PropTypes.number,
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
