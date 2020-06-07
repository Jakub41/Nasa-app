/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Delayed from 'delayed';
import { getPod } from '../../API';
import PodCard from '../../Components/Pod';
import Loader from '../../Components/Loaders/Loader';
import NotifyError from '../../Util/Error';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podData: {},
      isLoading: true,
      error: false,
      redirecting: false,
      loadingTimeoutId: 0,
    };
  }

  componentDidMount = async () => {
    const podData = await getPod();

    if (!podData) this.setState({ error: true });

    const loadingTimeoutId = Delayed.delay(() => {
      this.setState({ isLoading: false });
    }, 3000);

    this.setState({
      podData,
      loadingTimeoutId,
    });
  };

  componentWillUnmount = () => {
    const { loadingTimeoutId } = this.state;
    clearTimeout(loadingTimeoutId);
  };

  redirectToMarsWeather = () => {
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
        {error ? <NotifyError /> : <PodCard data={podData} redirect={this.redirectToMarsWeather} />}
      </>
    );
  }
}

Main.defaultProps = {
  podData: {},
};

Main.propTypes = {
  podData: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    hdurl: PropTypes.string,
    explanation: PropTypes.string,
    date: PropTypes.string,
    copyright: PropTypes.string,
    mediaType: PropTypes.string,
  }),
};
