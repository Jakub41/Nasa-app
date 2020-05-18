import React from "react";
import { Wrapper, Date } from "./styles";
import { IconContext } from "react-icons";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";
import { WiCloudUp } from "react-icons/wi";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

const WeatherMarsInfo = ({ sol, isMetric }) => {
  return (
    <Wrapper>
      <Date>
        <h2>{sol.sol}</h2>
        <p>{sol.date}</p>
      </Date>
    </Wrapper>
  );
};

export default WeatherMarsInfo;
