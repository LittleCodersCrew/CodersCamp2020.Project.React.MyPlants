import React from 'react';
import PropTypes from 'prop-types';
import styles from './plantInfo.module.scss';

const PlantInfo = ({ name, latinName, plantDetails, image }) => (
  <div className={styles.info}>
    <img className={styles.image} src={image} alt="Plant" />
    <div className={styles.about}>
      <div>
        <h2>{name}</h2>
        <h3>{latinName}</h3>
      </div>
      <div className={styles.details}>
        <p>
          <span>Species:</span>
          <span>{plantDetails.species}</span>
        </p>
        <p>
          <span>Min temperature:</span>
          <span>
            {plantDetails.minTemperature}
            {' '}
            °C
          </span>
        </p>
        <p>
          <span>Max temperature:</span>
          <span>
            {plantDetails.maxTemperature}
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
          <span>{plantDetails.wateringMethod}</span>
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
          <span>{plantDetails.isToxic ? 'Yes' : 'No'}</span>
        </p>
        <p>
          <span>Safe for domestic animals: </span>
          <span>{plantDetails.safeForAnimals ? 'Yes' : 'No'}</span>
        </p>
      </div>
    </div>
  </div>
);

export default PlantInfo;

PlantInfo.propTypes = {
  name: PropTypes.string.isRequired,
  latinName: PropTypes.string.isRequired,
  plantDetails: PropTypes.shape({
    species: PropTypes.string,
    minTemperature: PropTypes.number,
    maxTemperature: PropTypes.number,
    sunlight: PropTypes.string,
    humidity: PropTypes.string,
    watering: PropTypes.string,
    wateringMethod: PropTypes.string,
    application: PropTypes.string,
    subsoil: PropTypes.string,
    conditioners: PropTypes.string,
    spraying: PropTypes.string,
    isToxic: PropTypes.bool,
    safeForAnimals: PropTypes.bool
  }).isRequired,
  image: PropTypes.string.isRequired
};
