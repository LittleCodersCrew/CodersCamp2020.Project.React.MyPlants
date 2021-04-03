import React from 'react';
import PlantInfo from '../../components/PlantInfo/PlantInfo';
import samplePlant from '../../assets/illustrations/plant.png';
import { modal, summary, userMessage, message } from './Modal.module.scss';
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
  <div className={modal}>
    <PlantInfo name="Chinese Money" latinName="Pilea peperomides" plantDetails={plantDetails} image={samplePlant} />
    <div className={summary}>
      <Button className="button" text="Edit" />
      <Button className="button" text="Delete" />
    </div>
    <div className={userMessage}>
      <h1 className={message}>
        Thank you for your participation!
        <br />
        As soon as it is verified by our team, this plant will be available for others in our base.
      </h1>
      <Button className="button" text="Save" />
    </div>
  </div>
);

export default Modal;
