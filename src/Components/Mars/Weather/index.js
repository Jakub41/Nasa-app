import React from "react";
import { Wrapper, Date, Temp, Wind } from "./styles";
import { formatTemperature, formatWindSpeed } from "../../../Helpers";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

const WeatherMarsData = ({ sol, isMetric, setSelectedSol }) => {
  console.log("Selected Weather Data", setSelectedSol);
  return (
    <Wrapper>
      <Date>
        <h2>{setSelectedSol ? setSelectedSol.sol : sol.sol} Sol</h2>
        <p>{setSelectedSol ? setSelectedSol.date : sol.date}</p>
      </Date>
      <Temp>
        <h2 className="section-title">Temperature</h2>
        <p className="reading">
          <FaTemperatureHigh />
          <span>
            {" "}
            {setSelectedSol
              ? formatTemperature(setSelectedSol.maxTemp, isMetric)
              : formatTemperature(sol.maxTemp, isMetric)}
          </span>
          <span> {isMetric ? <RiCelsiusLine /> : <RiFahrenheitLine />}</span>
        </p>
        <p className="reading">
          <FaTemperatureLow />
          <span>
            {" "}
            {setSelectedSol
              ? formatTemperature(setSelectedSol.minTemp, isMetric)
              : formatTemperature(sol.minTemp, isMetric)}
          </span>
          <span> {isMetric ? <RiCelsiusLine /> : <RiFahrenheitLine />}</span>
        </p>
      </Temp>

      <Wind
        deg={
          setSelectedSol
            ? setSelectedSol.windDirectionDegrees
            : sol.windDirectionDegrees
        }
      >
        <h2 className="section-title">Wind</h2>
        <p className="reading">
          <span>
            {setSelectedSol
              ? formatWindSpeed(setSelectedSol.windSpeed, isMetric)
              : formatWindSpeed(sol.windSpeed, isMetric)}
          </span>
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
