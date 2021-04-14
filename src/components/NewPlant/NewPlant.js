import React from 'react';
import PropTypes from 'prop-types';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';
import Button from '../Button';
import styles from './NewPlant.module.scss';

const NewPlant = ({ plant }) => {
  const { token } = useToken();

  const toDelete = async (e) => {
    e.preventDefault();
    fetch(`${Database.URL}/plant/${plant._id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  };

  const toSave = async (e) => {
    e.preventDefault();
    fetch(`${Database.URL}/plant/${plant._id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div>
          <img className={styles.image} src={plant.image} alt="Plant" />
        </div>
        <div className={styles.about}>
          <div>
            <h1>{plant.name}</h1>
            <h3 className={styles.response}>{plant.latin_name}</h3>
          </div>
          <div className={styles.details}>
            <p>
              <span>Species:</span>
              <span className={styles.response}>{plant.species}</span>
            </p>
            <p>
              <span>Min temperature:</span>
              <span className={styles.response}>
                {plant.min_temperature}
                {' '}
                °C
              </span>
            </p>
            <p>
              <span>Max temperature:</span>
              <span className={styles.response}>
                {plant.max_temperature}
                {' '}
                °C
              </span>
            </p>
            <p>
              <span>Sunlight:</span>
              <span className={styles.response}>{plant.sunlight}</span>
            </p>
            <p>
              <span>Humidity:</span>
              <span className={styles.response}>{plant.humidity}</span>
            </p>
            <p>
              <span>Watering:</span>
              <span className={styles.response}>{plant.watering}</span>
            </p>
            <p>
              <span>Watering method:</span>
              <span className={styles.response}>{plant.watering_method}</span>
            </p>
            <p>
              <span>Application:</span>
              <span className={styles.response}>{plant.application}</span>
            </p>
            <p>
              <span>Subsoil: </span>
              <span className={styles.response}>{plant.subsoil}</span>
            </p>
            <p>
              <span>Conditioners: </span>
              <span className={styles.response}>{plant.conditioners}</span>
            </p>
            <p>
              <span>Spraying: </span>
              <span className={styles.response}>{plant.spraying}</span>
            </p>
            <p>
              <span>Toxicity: </span>
              <span className={styles.response}>{plant.toxicity?.human ? 'yes' : 'no'}</span>
            </p>
            <p>
              <span>Safe for domestic animals: </span>
              <span className={styles.response}>{plant.toxicity?.animal ? 'no' : 'yes'}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button text="Save" type="submit" onClick={toSave} />
        <Button text="Delete" type="submit" onClick={toDelete} />
      </div>
    </div>
  );
};

NewPlant.propTypes = {
  plant: PropTypes.shape({
    _id: PropTypes.string,
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
  }).isRequired
};

export default NewPlant;
