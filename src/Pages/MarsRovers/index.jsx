import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getRoverManifest } from '../../API';
import { ImgBK } from '../../Components/MarsRovers/styles';
import NotifyError from '../../Util/Error';
import RoversLoader from '../../Components/Loaders/RoversLoader';
import { PromiseWithTimeout } from '../../Util/AutoTimeoutUnsubscriber';

import MarsRovers from '../../Components/MarsRovers';
import { savePhotosManifest } from '../../Components/MarsRovers/Rover/RoverCameras/PhotosDataFetch';

export default class MarsRoversIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: false,
      rovers: [],
    };
  }

  componentDidMount = async () => {
    try {
      await PromiseWithTimeout(
        [
          getRoverManifest('curiosity'),
          getRoverManifest('opportunity'),
          getRoverManifest('spirit'),
        ],
        3000
      ).then(
        (rovers) => {
          rovers.forEach(savePhotosManifest);
          if (rovers.some((rover) => rover.photo_manifest === undefined))
            this.setState({ error: true, isLoading: false });

          this.setState({
            isLoading: false,
            rovers,
          });
        },
        (error) => {
          console.error('Error fetching Rover Manifests: ', error);
          this.setState({ error: true, isLoading: false });
        }
      );
    } catch (error) {
      console.error('Error Mars Rover Page: ', error);
      this.setState({
        error: true,
        isLoading: false,
      });
    }
  };

  render() {
    const { isLoading, error, rovers } = this.state;

    return isLoading ? (
      <RoversLoader />
    ) : (
      <>
        {error ? (
          <NotifyError />
        ) : (
          <ImgBK>
            <Container>
              <MarsRovers rovers={rovers} />
            </Container>
          </ImgBK>
        )}
      </>
    );
  }
}

MarsRoversIndex.defaultProps = {
  manifest: {
    curiosity: {},
    spirit: {},
    opportunity: {},
  },
};

const marsRoversIndexPropType = PropTypes.shape({
  name: PropTypes.string,
  landing_date: PropTypes.string,
  launch_date: PropTypes.string,
  max_date: PropTypes.string,
  max_sol: PropTypes.number,
});

MarsRoversIndex.propTypes = {
  manifest: PropTypes.shape({
    curiosity: marsRoversIndexPropType,
    spirit: marsRoversIndexPropType,
    opportunity: marsRoversIndexPropType,
  }),
};
