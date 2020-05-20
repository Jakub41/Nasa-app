import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { getPod } from "../../API";
import PodCard from "../../Components/Pod";
import Loader from "../../Components/Loader";
import Delayed from "delayed";
import NotifyError from "../../Util/Error";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podData: {},
      isFetching: false,
      isLoading: true,
      error: false,
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

    if (!podData) this.setState({ error: true });

    Delayed.delay(() => {
      this.setState({ isLoading: false });
    }, 3000);

    this.setState({
      isFetching: true,
      podData: podData,
    });
  };

  redirectToMarsWeather = (e) => {
    this.setState({ redirecting: true });
  };

  render() {
    const { podData, isLoading, redirecting, error } = this.state;
    return redirecting ? (
      <Redirect to="/mars-weather" />
    ) : isLoading ? (
      <Loader />
    ) : (
      <>
        {error ? (
          <NotifyError />
        ) : (
          <PodCard
            data={podData}
            redirect={this.redirectToMarsWeather}
          ></PodCard>
        )}
      </>
    );
  }
}

Main.defaultProps = {
  podData: {},
  isFetching: false,
  isLoading: true,
  error: false,
  redirecting: false,
};

Main.propTypes = {
  podData: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  redirecting: PropTypes.bool.isRequired,
};
