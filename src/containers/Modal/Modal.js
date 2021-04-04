import React from 'react';
import PlantInfo from '../../components/PlantInfo/PlantInfo';
import samplePlant from '../../assets/illustrations/plant.png';
import styles from './Modal.module.scss';
import Button from '../../components/Button/Button';

const plantDetails = {
  species: 'Plant',
  minTemperature: 20,
  maxTemperature: 28,
  sunlight: 'Direct sun',
  humidity: 'Medium',
  watering: 'Weekly',
  wateringMethod: 'On soil',
  application: 'Test',
  subsoil: 'Test',
  conditioners: 'Test',
  spraying: 'Test',
  isToxic: false,
  safeForAnimals: true
};

const Modal = () => (
  <div className={styles.modal}>
    <PlantInfo name="Chinese Money" latinName="Pilea peperomides" plantDetails={plantDetails} image={samplePlant} />
    <div className={styles.summary}>
      <Button className={styles.button} text="Edit" />
      <Button className={styles.button} text="Delete" />
    </div>
    <div className={styles.userMessage}>
      <h1 className={styles.message}>
        Thank you for your participation!
        <br />
        As soon as it is verified by our team, this plant will be available for others in our base.
      </h1>
      <Button className={styles.button} text="Save" />
    </div>
  </div>
);

export default Modal;
