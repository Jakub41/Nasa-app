import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Delayed from 'delayed';
import { getRoverManifest } from '../../API';
import { ImgBK } from '../../Components/MarsRovers/styles';
import NotifyError from '../../Util/Error';
import RoversLoader from '../../Components/Loaders/RoversLoader';
import MarsRovers from '../../Components/MarsRovers';
import { savePhotosManifest } from '../../Components/MarsRovers/Rover/RoverCameras/PhotosDataFetch';

export default class MarsRoversIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: false,
      manifest: {
        curiosity: {},
        spirit: {},
        opportunity: {},
      },
    };
  }

  componentDidMount = async () => {
    try {
      const curiosityManifest = await getRoverManifest('curiosity');
      const spiritManifest = await getRoverManifest('spirit');
      const opportunityManifest = await getRoverManifest('opportunity');

      if (!curiosityManifest || !spiritManifest || !opportunityManifest)
        this.setState({ error: true });

      const pM = 'photo_manifest';

      if (!(pM in curiosityManifest) || !(pM in spiritManifest) || !(pM in opportunityManifest))
        this.setState({ error: true });

      savePhotosManifest(curiosityManifest);
      savePhotosManifest(opportunityManifest);
      savePhotosManifest(spiritManifest);

      this.setState({
        isLoading: false,
        manifest: {
          curiosity: curiosityManifest,
          spirit: spiritManifest,
          opportunity: opportunityManifest,
        },
      });

      Delayed.delay(() => {
        this.setState({ isLoading: false });
      }, 3000);
    } catch {
      this.setState({ error: true });
    }
  };

  render() {
    const {
      isLoading,
      error,
      manifest: { curiosity, spirit, opportunity },
    } = this.state;

    return isLoading ? (
      <RoversLoader />
    ) : (
      <>
        {error ? (
          <NotifyError />
        ) : (
          <ImgBK>
            <Container>
              <MarsRovers curiosity={curiosity} spirit={spirit} opportunity={opportunity} />
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
MarsRoversIndex.propTypes = {
  manifest: PropTypes.shape({
    curiosity: PropTypes.shape({
      name: PropTypes.string,
      landing_date: PropTypes.string,
      launch_date: PropTypes.string,
      max_date: PropTypes.string,
      max_sol: PropTypes.number,
    }),
    spirit: PropTypes.shape({
      name: PropTypes.string,
      landing_date: PropTypes.string,
      launch_date: PropTypes.string,
      max_date: PropTypes.string,
      max_sol: PropTypes.number,
    }),
    opportunity: PropTypes.shape({
      name: PropTypes.string,
      landing_date: PropTypes.string,
      launch_date: PropTypes.string,
      max_date: PropTypes.string,
      max_sol: PropTypes.number,
    }),
  }),
};
