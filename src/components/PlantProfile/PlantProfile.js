import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SmallButton from '../SmallButton';

import { plant, plantImage } from './PlantProfile.module.scss';

import profileleaf from '../../assets/illustrations/plant-leaf.png';

const PlantProfile = ({ plantName, plantId, plantPhoto }) => (
  <div className={plant}>
    <Link className={plant} to={`/user/${plantId}`}>
      <img className={plantImage} src={plantPhoto} alt={plantName} height="80rem" width="80rem" />
      <SmallButton text={plantName} fontsize="1.5em" />
    </Link>
  </div>
);

PlantProfile.propTypes = {
  plantName: PropTypes.string.isRequired,
  plantId: PropTypes.number.isRequired,
  plantPhoto: PropTypes.string
};

PlantProfile.defaultProps = { plantPhoto: profileleaf };

export default PlantProfile;
