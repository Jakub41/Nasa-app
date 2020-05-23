/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Delayed from 'delayed';
import { getPod } from '../../API';
import PodCard from '../../Components/Pod';
import Loader from '../../Components/Loader';
import NotifyError from '../../Util/Error';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podData: {},
      isLoading: true,
      error: false,
      redirecting: false,
    };
  }

  componentDidMount = async () => {
    const podData = await getPod();

    if (!podData) this.setState({ error: true });

    Delayed.delay(() => {
      this.setState({ isLoading: false });
    }, 3000);

    this.setState({
      podData,
    });
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
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    hdurl: PropTypes.string,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    copyright: PropTypes.string,
    mediaType: PropTypes.string,
  }),
};
