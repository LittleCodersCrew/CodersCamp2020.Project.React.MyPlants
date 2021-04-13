/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../SmallButton';
import PlantInfoGarden from '../PlantInfoGarden';
import styles from './PlantProfile.module.scss';
import profileleaf from '../../assets/illustrations/plant-leaf.png';
import Database from '../../database';
import closeSquare from '../../assets/icons/CloseSquare.png';

const PlantProfile = ({ plantName, userId, plantId, plantPhoto, description }) => {
  const [plantData, setPlantData] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let speciesId = '';
    const fetchPlantInfo = async (id) => {
      const plant = await fetch(`${Database.URL}/plant/${plantId}`)
        .then((res) => res.json());
      setPlantData(plant);
      speciesId = plant.species;
      const fetchPlantSpecies = async (plantSpeciesId) => {
        let species;
        try {
          species = await fetch(`${Database.URL}/species/${plantSpeciesId}`)
            .then((res) => res.json())
            .then((json) => json.name);
          setPlantData((restDetails) => ({ ...restDetails, species }));
        } catch (e) {
          setPlantData((restDetails) => ({ ...restDetails, species: 'Unknown' }));
        }
      };
      fetchPlantSpecies(speciesId);
    };

    fetchPlantInfo(plantId);
  }, [plantId, userId]);

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.plant}>
        <button className={styles.plant} onClick={toggleModal}>
          <img className={styles.plantImage} src={plantPhoto} alt={plantName} height="80rem" width="80rem" />
          <Text text={plantName} fontsize="1.5em" />
        </button>
      </div>
      <div
        className={modalOpen ? styles.overlay : styles.hide}
        onClick={toggleModal}
        onKeyDown={toggleModal}
        role="button"
        tabIndex="0"
      />
      <div className={modalOpen ? styles.modal : styles.hide}>
        <button onClick={toggleModal}>
          <img src={closeSquare} alt="close" />
        </button>
        <PlantInfoGarden
          description={description}
          photo={plantPhoto}
          name={plantName}
          plantDetails={plantData}
        />
      </div>
    </>
  );
};

PlantProfile.propTypes = {
  plantName: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  plantId: PropTypes.string.isRequired,
  plantPhoto: PropTypes.string,
  description: PropTypes.string
};

PlantProfile.defaultProps = { plantPhoto: profileleaf, description: '' };

export default PlantProfile;
