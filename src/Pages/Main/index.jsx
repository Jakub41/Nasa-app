import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { getPod } from "../../API";
import PodCard from "../../Components/Pod";
import Loader from "../../Components/Loader";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podData: [],
      isFetching: false,
      isLoading: true,
      error: null,
      redirecting: false,
    };
  }

  componentDidMount = async () => {
    const podData = await getPod();

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);

    this.setState({
      isFetching: true,
      podData: podData,
    });
    console.log("POD State >> ", this.state.podData);
  };

  redirectToHome = (e) => {
    this.setState({ redirecting: true });
  };

  render() {
    const { podData, isLoading, redirecting } = this.state;
    return redirecting ? (
      <Redirect to="/home" />
    ) : isLoading ? (
      <Loader />
    ) : (
      <PodCard data={podData} redirect={this.redirectToHome}></PodCard>
    );
  }
}
