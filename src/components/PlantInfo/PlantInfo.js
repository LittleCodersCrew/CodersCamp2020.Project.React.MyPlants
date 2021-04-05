import React from 'react';
import PropTypes from 'prop-types';
import styles from './plantInfo.module.scss';

const PlantInfo = ({ plantDetails }) => {
  if (plantDetails === undefined || !plantDetails.accepted) {
    return <p>No such plant in database</p>;
  }

  const image = plantDetails.image === '' ? 'test' : plantDetails.image;

  return (
    <div className={styles.info}>
      <img className={styles.image} src={`../img/${image}.png`} alt="Plant" />
      <div className={styles.about}>
        <div>
          <h2>{plantDetails.name}</h2>
          <h3>{plantDetails.latin_name}</h3>
        </div>
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
            <span>{plantDetails.toxicity?.human ? 'Yes' : 'No'}</span>
          </p>
          <p>
            <span>Safe for domestic animals: </span>
            <span>{plantDetails.toxicity?.animal ? 'Yes' : 'No'}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

PlantInfo.propTypes = {
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
    toxicity: PropTypes.arrayOf({
      human: PropTypes.string,
      animal: PropTypes.string
    })
  }).isRequired
};

export default PlantInfo;
