import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { getPod } from "../../API";
import PodCard from "../../Components/Pod";
import Loader from "../../Components/Loader";
import Delayed from "delayed";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podData: {},
      isFetching: false,
      isLoading: true,
      error: null,
      redirecting: false,
    };
  }

  static defaultProps = {
    podData: {},
  };

  static propsTypes = {
    podData: PropTypes.object.isRequired,
  };

  componentDidMount = async () => {
    const podData = await getPod();

    Delayed.delay(() => {
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

Main.defaultProps = {
  podData: {},
};

Main.propTypes = {
  podData: PropTypes.object.isRequired,
};
