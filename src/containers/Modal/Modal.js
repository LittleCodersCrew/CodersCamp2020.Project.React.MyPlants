import React from 'react';
import PlantInfo from '../../components/PlantInfo/PlantInfo';
import samplePlant from '../../assets/illustrations/plant.png';
import styles from './Modal.module.scss';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';

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

const Modal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { show, closeModal } = props;

  return (
    <div className={show ? 'modal' : 'hide'}>
      <PlantInfo name="Chinese Money" latinName="Pilea peperomides" plantDetails={plantDetails} image={samplePlant} />
      <div className={styles.summary}>
        <Button text="Edit" />
        <Button text="Delete" />
      </div>
      <div className={styles.userMessage}>
        <Text text="Thank you for your participation!" fontsize="1.5em" />
        <Text text="As soon as it is verified by our team, this plant will be available for others in our base." fontsize="1.5em" />
      </div>
      <Button text="Save" onClick={closeModal} />
    </div>
  );
};

export default Modal;
