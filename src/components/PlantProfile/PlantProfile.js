import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Text from '../SmallButton';
import { plant, plantImage } from './PlantProfile.module.scss';
import profileleaf from '../../assets/illustrations/plant-leaf.png';
import Database from '../../database';

const PlantProfile = ({ plantName, plantId, plantPhoto }) => {
  const [plantNameLink, setPlantNameLink] = useState('');
  useEffect(() => {
    const fetchPlantInfo = async (id) => {
      const name = await fetch(`${Database.URL}/plant/${id}`)
        .then((res) => res.json())
        .then((json) => json.name);
      setPlantNameLink(name);
    };
    fetchPlantInfo(plantId);
  }, [plantId]);

  return (
    <div className={plant}>
      <Link className={plant} to={`/plant/${plantNameLink}`}>
        <img className={plantImage} src={plantPhoto} alt={plantName} height="80rem" width="80rem" />
        <Text text={plantName.substring(0, 8)} fontsize="1.5em" />
      </Link>
    </div>
  );
};

PlantProfile.propTypes = {
  plantName: PropTypes.string.isRequired,
  plantId: PropTypes.string.isRequired,
  plantPhoto: PropTypes.string
};

PlantProfile.defaultProps = { plantPhoto: profileleaf };

export default PlantProfile;
