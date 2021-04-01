import React from 'react';
import PropTypes from 'prop-types';
import SmallButton from '../SmallButton';

import { plant, plantImage } from './PlantProfile.module.scss';

import profileleaf from '../../assets/illustrations/plant-leaf.png';

const PlantProfile = ({ image, name }) => (
  <div className={plant}>
    <img className={plantImage} src={image} alt="Leaf" height="80rem" width="80rem" />
    <SmallButton text={name} fontsize="1.5em" />
  </div>
);

PlantProfile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired
};

PlantProfile.defaultProps = { image: { profileleaf } };

export default PlantProfile;
