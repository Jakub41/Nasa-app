import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherMars from '../../Components/Mars';
import { MarsWeatherData } from '../../API/MarsWeatherData';
import MarsLoader from '../../Components/Loaders/MarsLoader';
import NotifyError from '../../Util/Error';
import createTimeoutUnsubscriber from '../../Util/AutoTimeoutUnsubscriber';

const autoTimeoutUnsubscriber = createTimeoutUnsubscriber();

export default class WeatherMarsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wMarsData: [],
      selectedSol: {},
      setSelectedSol: {},
      isMetric: true,
      isPrevious: false,
      isLoading: true,
      error: false,
    };

    this.handleIsPrevious = this.handleIsPrevious.bind(this);
    this.handleIsMetric = this.handleIsMetric.bind(this);
    this.handleSelectedSol = this.handleSelectedSol.bind(this);
  }

  componentDidMount = async () => {
    try {
      const data = await MarsWeatherData();

      if (!data)
        this.setState({
          error: true,
        });

      autoTimeoutUnsubscriber(() => {
        this.setState({
          isLoading: false,
          wMarsData: data,
          selectedSol: data.length - 1,
        });
      }, 10500);
    } catch {
      this.setState({
        error: true,
      });
    }
  };

  componentWillUnmount = () => {
    autoTimeoutUnsubscriber();
  };

  handleIsPrevious(bool) {
    this.setState({ isPrevious: bool });
  }

  handleIsMetric(bool) {
    this.setState({ isMetric: bool });
  }

  handleSelectedSol(selectedSol) {
    this.setState({ setSelectedSol: selectedSol });
  }

  render() {
    const {
      wMarsData,
      isLoading,
      selectedSol,
      setSelectedSol,
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
                setSelectedSol={setSelectedSol}
                weather={wMarsData}
                metric={isMetric}
                prev={isPrevious}
                handleIsPrevious={this.handleIsPrevious}
                handleIsMetric={this.handleIsMetric}
                handleSelectedSol={this.handleSelectedSol}
              />
            )}
          </>
        )}
      </>
    );
  }
}

WeatherMarsIndex.defaultProps = {
  setSelectedSol: {
    sol: '',
    maxTemp: 0,
    minTemp: 0,
    date: '',
    windDirectionDegrees: 0,
    windSpeed: 0,
  },
};

WeatherMarsIndex.propTypes = {
  setSelectedSol: PropTypes.shape({
    sol: PropTypes.string,
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number,
    date: PropTypes.string,
    windDirectionDegrees: PropTypes.number,
    windSpeed: PropTypes.number,
  }),
};
