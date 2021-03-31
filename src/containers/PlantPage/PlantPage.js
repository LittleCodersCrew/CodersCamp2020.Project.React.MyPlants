import React from 'react';
import BackButton from '../../components/BackButton';
import PlantInfo from '../../components/PlantInfo';
import Comments from '../Comments';
import samplePlant from '../../assets/illustrations/plant.png';
import { wrapper, info } from './plantPage.module.scss';

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

const PlantPage = () => (
  <div className={wrapper}>
    <BackButton />
    <div className={info}>
      <PlantInfo name="Chinese Monkey" latinName="Pilea peperomides" plantDetails={plantDetails} image={samplePlant} />
    </div>
    <Comments />
  </div>
);

export default PlantPage;
