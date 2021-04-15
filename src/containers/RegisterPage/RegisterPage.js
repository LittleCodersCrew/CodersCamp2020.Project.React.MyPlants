import React from 'react';
import Background from '../../components/Background';
import LandingPlant from '../../components/LandingPlant';
import Register from '../../components/Register';
import { wrapper } from './RegisterPage.module.scss';

const AuthorsPage = () => (
  <>
    <Background>
      <div className={wrapper}>
        <LandingPlant />
        <Register />
      </div>
    </Background>
  </>
);

export default AuthorsPage;
