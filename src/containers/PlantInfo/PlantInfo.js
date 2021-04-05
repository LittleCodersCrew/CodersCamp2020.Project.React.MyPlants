import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './plantInfo.module.scss';
import Database from '../../database';

const pathToPlantImage = '../../assets/';

const PlantInfo = () => {
  const [plantDetails, setPlantDetails] = useState([]);
  const { plantNameFromURL } = useParams();

  useEffect(() => {
    const fetchPlantInfo = async (plantName) => {
      const details = await fetch(`${Database.URL}/plant/`)
        .then((res) => res.json())
        .then((json) => json.find((plant) => plant.name === plantName));
      setPlantDetails(details);
    };
    fetchPlantInfo(plantNameFromURL);
  }, [plantNameFromURL]);

  if (plantDetails === undefined) {
    return <p>No such plant in database</p>;
  }

  return (
    <div className={styles.info}>
      <img className={styles.image} src={pathToPlantImage + plantDetails.image} alt="Plant" />
      <div className={styles.about}>
        <div>
          <h2>{plantNameFromURL}</h2>
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

export default PlantInfo;
