import React from "react";
import { UnitCss, Toggle } from "./styles";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";

const Unit = ({ metric, handleIsMetric }) => {
  const toggleUnit = () => {
    handleIsMetric(!metric);
  };

  return (
    <UnitCss>
      <label htmlFor="cel">
        <RiCelsiusLine />
      </label>
      <Toggle metric={metric} onClick={toggleUnit} />
      <label htmlFor="fah">
        <RiFahrenheitLine />
      </label>
    </UnitCss>
  );
};

export default Unit;
