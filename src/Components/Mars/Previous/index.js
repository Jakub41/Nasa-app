import React from "react";
import { PreviousWrapper, Toggle, PreviousDays, PreviousDay } from "./styles";
import { FaLongArrowAltUp } from "react-icons/fa";

const Previous = ({ weather, previous, sol, metric, handleMyProp }) => {
  console.log("Prev", previous);
  console.log("Sol", sol);

  const showPrevious = () => {
    handleMyProp(!previous);
  };

  return (
    <PreviousWrapper previous={previous}>
      <Toggle
        htmlFor="weather-toggle"
        onClick={showPrevious}
        previous={previous}
      >
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
              <span>{sol.maxTemp}</span>
              <span>{metric ? " C" : " F"}</span>
            </p>
            <p className="previous-day__temp">
              Low:
              <span>{sol.minTemp}</span>
              <span>{metric ? " C" : " F"}</span>
            </p>
            <button
              className="previous-day__more-info"
              onClick={() => console.log("CLICK")}
            >
              More info
            </button>
          </PreviousDay>
        ))}
      </PreviousDays>
    </PreviousWrapper>
  );
};

export default Previous;
