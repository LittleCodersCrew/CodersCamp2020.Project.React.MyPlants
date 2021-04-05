import React from 'react';
import BackButton from '../../components/BackButton';
import PlantInfo from '../PlantInfo';
import Comments from '../Comments';
import { wrapper, info } from './plantPage.module.scss';

const PlantPage = () => (
  <div className={wrapper}>
    <BackButton />
    <div className={info}>
      <PlantInfo />
    </div>
    <Comments />
  </div>
);

export default PlantPage;
