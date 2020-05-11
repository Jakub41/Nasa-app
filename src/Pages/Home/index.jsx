import React, { Component } from "react";
import WeatherMars from "../../Components/Mars/Weather";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wMarsData: [],
      isFetching: false,
      isLoading: true,
      error: null,
    };
  }

  render() {
    return (
      <>
        <WeatherMars />
      </>
    );
  }
}
