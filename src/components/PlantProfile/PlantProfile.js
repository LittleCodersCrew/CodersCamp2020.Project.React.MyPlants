/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../SmallButton';

import { plant, plantImage } from './PlantProfile.module.scss';

import profileleaf from '../../assets/illustrations/plant-leaf.png';

const PlantProfile = ({ plantName, plantId, plantPhoto }) => (
  <div className={plant}>
    <a className={plant} href="/user/garden">
      <img className={plantImage} src={plantPhoto} alt={plantName} height="80rem" width="80rem" />
      <Text text={plantName.substring(0, 8)} fontsize="1.5em" />
    </a>
  </div>
);

PlantProfile.propTypes = {
  plantName: PropTypes.string.isRequired,
  plantId: PropTypes.string.isRequired,
  plantPhoto: PropTypes.string
};

PlantProfile.defaultProps = { plantPhoto: profileleaf };

export default PlantProfile;
