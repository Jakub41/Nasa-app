import React from "react";
import { Wrapper, Date, Temp, Wind } from "./styles";
import { formatTemperature, formatWindSpeed } from "../../../Helpers";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

const WeatherMarsData = ({ sol, isMetric }) => {
  return (
    <Wrapper>
      <Date>
        <h2>{sol.sol} Sol</h2>
        <p>{sol.date}</p>
      </Date>
      <Temp>
        <h2 className="section-title">Temp</h2>
        <p className="reading">
          <FaTemperatureHigh />
          <span> {formatTemperature(sol.maxTemp, isMetric)}</span>
          <span> {isMetric ? <RiCelsiusLine /> : <RiFahrenheitLine />}</span>
        </p>
        <p className="reading">
          <FaTemperatureLow />
          <span> {formatTemperature(sol.minTemp, isMetric)}</span>
          <span> {isMetric ? <RiCelsiusLine /> : <RiFahrenheitLine />}</span>
        </p>
      </Temp>

      <Wind deg={sol.windDirectionDegrees}>
        <h2 className="section-title">Wind</h2>
        <p className="reading">
          <span>{formatWindSpeed(sol.windSpeed, isMetric)}</span>
          <span>{isMetric ? " kph" : " mph"}</span>
        </p>

        <div className="wind__direction">
          <div className="wind__arrow"></div>
        </div>
      </Wind>
    </Wrapper>
  );
};

export default WeatherMarsData;
