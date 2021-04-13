import React from 'react';
import PropTypes from 'prop-types';
import styles from './plantInfo.module.scss';
import Text from '../SmallButton';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';

const PlantInfo = ({ photo, name, plantDetails, description, userId, plantId }) => {
  const { token } = useToken();
  if (plantDetails === undefined || !plantDetails.accepted) {
    return <p>No such plant in database</p>;
  }

  const goToEdit = () => {
    window.location.reload(false);
  };

  const deletePlant = () => {
    fetch(`${Database.URL}/user/${userId}/plants/${plantId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    window.location.reload(false);
  };

  return (
    <div className={styles.info}>
      <div className={styles.header}>
        <img className={styles.image} src={photo} alt="Plant" />
        <div className={styles.headerText}>
          <Text text={name.charAt(0).toUpperCase() + name.slice(1)} fontsize="1.5em" />
          <div className={styles.buttons}>
            <button onClick={goToEdit}>
              Edit
            </button>
            <button onClick={deletePlant}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.details}>
          <p>
            <span>Species:</span>
            <span>{plantDetails.species}</span>
          </p>
          <p>
            <span>Min temperature:</span>
            <span>
              {plantDetails.min_temperature}
              {' '}
              °C
            </span>
          </p>
          <p>
            <span>Max temperature:</span>
            <span>
              {plantDetails.max_temperature}
              {' '}
              °C
            </span>
          </p>
          <p>
            <span>Sunlight:</span>
            <span>{plantDetails.sunlight}</span>
          </p>
          <p>
            <span>Humidity:</span>
            <span>{plantDetails.humidity}</span>
          </p>
          <p>
            <span>Watering:</span>
            <span>{plantDetails.watering}</span>
          </p>
          <p>
            <span>Watering method:</span>
            <span>{plantDetails.watering_method}</span>
          </p>
          <p>
            <span>Application:</span>
            <span>{plantDetails.application}</span>
          </p>
          <p>
            <span>Subsoil: </span>
            <span>{plantDetails.subsoil}</span>
          </p>
          <p>
            <span>Conditioners: </span>
            <span>{plantDetails.conditioners}</span>
          </p>
          <p>
            <span>Spraying: </span>
            <span>{plantDetails.spraying}</span>
          </p>
          <p>
            <span>Toxicity: </span>
            <span>{plantDetails.toxicity?.human ? 'yes' : 'no'}</span>
          </p>
          <p>
            <span>Safe for domestic animals: </span>
            <span>{plantDetails.toxicity?.animal ? 'no' : 'yes'}</span>
          </p>
        </div>
        <p style={{ textAlign: 'center' }}>{description}</p>
      </div>
    </div>
  );
};

PlantInfo.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  plantDetails: PropTypes.shape({
    name: PropTypes.string,
    latin_name: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
    min_temperature: PropTypes.number,
    max_temperature: PropTypes.number,
    sunlight: PropTypes.string,
    humidity: PropTypes.string,
    watering: PropTypes.string,
    watering_method: PropTypes.string,
    application: PropTypes.string,
    subsoil: PropTypes.string,
    conditioners: PropTypes.string,
    spraying: PropTypes.string,
    accepted: PropTypes.bool,
    toxicity: PropTypes.shape({
      human: PropTypes.bool,
      animal: PropTypes.bool
    })
  }).isRequired,
  description: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  plantId: PropTypes.string.isRequired
};

export default PlantInfo;
