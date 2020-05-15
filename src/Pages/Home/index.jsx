import React, { Component } from "react";
import WeatherMars from "../../Components/Mars/Weather";
import { MarsWeatherData } from "../../API/MarsWeatherData";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wMarsData: [],
      selectedSol: "",
      isFetching: false,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount = async () => {
    const data = await MarsWeatherData();

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);

    this.setState({
      wMarsData: data,
      selectedSol: data.length - 1,
      isFetching: true,
    });

    console.log("MW Data >> ", this.state.wMarsData);
    console.log("SOL Data >> ", this.state.selectedSol);
  };

  render() {
    const { wMarsData, isLoading, selectedSol } = this.state;
    return <>{isLoading ? <h1>LOADING...</h1> : <WeatherMars sol={wMarsData[selectedSol]} />}</>;
  }
}
