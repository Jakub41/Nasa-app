import React from "react";
import { UnitCss, Toggle } from "./styles";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";

const Unit = ({ metric }) => {
  return (
    <UnitCss>
      <label htmlFor="cel">
        <RiCelsiusLine />
      </label>
      <Toggle metric={metric} onClick={() => console.log("CLICK")} />
      <label htmlFor="fah">
        <RiFahrenheitLine />
      </label>
    </UnitCss>
  );
};

export default Unit;
