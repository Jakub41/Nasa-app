import React, { Component } from "react";
import PropTypes from "prop-types";
import WeatherMars from "../../Components/Mars";
import { MarsWeatherData } from "../../API/MarsWeatherData";
import MarsLoader from "../../Components/MarsLoader";

export default class WeatherMarsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wMarsData: [],
      selectedSol: "",
      isMetric: true,
      isPrevious: false,
      isFetching: false,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount = async () => {
    const data = await MarsWeatherData();

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 10500);

    this.setState({
      wMarsData: data,
      selectedSol: data.length - 1,
      isFetching: true,
    });

    console.log("MW Data >> ", this.state.wMarsData);
    console.log("SOL Data >> ", this.state.selectedSol);
  };

  render() {
    const {
      wMarsData,
      isLoading,
      selectedSol,
      isMetric,
      isPrevious,
    } = this.state;
    return (
      <>
        {isLoading ? (
          <MarsLoader />
        ) : (
          <WeatherMars
            sol={wMarsData[selectedSol]}
            weather={wMarsData}
            metric={isMetric}
            prev={isPrevious}
          />
        )}
      </>
    );
  }
}

WeatherMarsIndex.defaultProps = {
  wMarsData: [],
  selectedSol: "",
  isMetric: true,
  isPrevious: false,
};

WeatherMarsIndex.propTypes = {
  wMarsData: PropTypes.array.isRequired,
  selectedSol: PropTypes.string.isRequired,
  isMetric: PropTypes.bool.isRequired,
  isPrevious: PropTypes.bool.isRequired,
};
