import React, { Component } from "react";
import { getPod } from "../../API";
import PodCard from "../../Components/Pod";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podData: [],
      isFetching: false,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount = async () => {
    const podData = await getPod();
    this.setState({
      isFetching: true,
      isLoading: false,
      podData: podData,
    });
    console.log("POD State >> ", this.state.podData);
  };

  render() {
    const { podData, isLoading } = this.state;
    return isLoading ? <h1>LOADING...</h1> : <PodCard data={podData} />;
  }
}
