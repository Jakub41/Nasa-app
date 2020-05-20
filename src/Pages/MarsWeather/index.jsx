import React, { Component } from "react";
import PropTypes from "prop-types";
import WeatherMars from "../../Components/Mars";
import { MarsWeatherData } from "../../API/MarsWeatherData";
import MarsLoader from "../../Components/MarsLoader";
import NotifyError from "../../Util/Error";

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
      error: false,
    };

    this.handleIsPrevious = this.handleIsPrevious.bind(this);
    this.handleIsMetric = this.handleIsMetric.bind(this);
  }

  handleIsPrevious(bool) {
    this.setState({ isPrevious: bool });
  }

  handleIsMetric(bool) {
    this.setState({  isMetric: bool });
  }

  componentDidMount = async () => {
    const data = await MarsWeatherData();

    if (!data)
      this.setState({
        error: true,
      });

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
      error,
    } = this.state;
    return (
      <>
        {isLoading ? (
          <MarsLoader />
        ) : (
          <>
            {error ? (
              <NotifyError />
            ) : (
              <WeatherMars
                sol={wMarsData[selectedSol]}
                weather={wMarsData}
                metric={isMetric}
                prev={isPrevious}
                handleIsPrevious={this.handleIsPrevious}
                handleIsMetric={this.handleIsMetric}
              />
            )}
          </>
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
  isFetching: false,
  isLoading: true,
  error: false,
};

WeatherMarsIndex.propTypes = {
  wMarsData: PropTypes.array.isRequired,
  selectedSol: PropTypes.string.isRequired,
  isMetric: PropTypes.bool.isRequired,
  isPrevious: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};
