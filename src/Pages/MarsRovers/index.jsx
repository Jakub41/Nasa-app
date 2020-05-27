import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Delayed from 'delayed';
import PropTypes from 'prop-types';
import { getRoverManifest } from '../../API';
import { ImgBK } from '../../Components/MarsRovers/styles';

import MarsRovers from '../../Components/MarsRovers';

export default class MarsRoversIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      // error: false,
      manifest: {
        curiosity: {},
        spirit: {},
        opportunity: {},
      },
    };
  }

  componentDidMount = async () => {
    const curiosityManifest = await getRoverManifest('curiosity');
    const spiritManifest = await getRoverManifest('spirit');
    const opportunityManifest = await getRoverManifest('opportunity');

    // if (!curiosityManifest || !spiritManifest || !opportunityManifest)
    //   this.setState({ error: true });

    Delayed.delay(() => {
      this.setState({ isLoading: false });
    }, 3000);

    this.setState({
      manifest: {
        curiosity: curiosityManifest,
        spirit: spiritManifest,
        opportunity: opportunityManifest,
      },
    });
  };

  render() {
    const {
      isLoading,
      manifest: { curiosity, spirit, opportunity },
    } = this.state;

    return isLoading ? (
      <h1>LOADING...</h1>
    ) : (
      <ImgBK>
        <Container>
          <MarsRovers curiosity={curiosity} spirit={spirit} opportunity={opportunity} />
        </Container>
      </ImgBK>
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
