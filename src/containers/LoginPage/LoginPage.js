import React from 'react';
import Background from '../../components/Background';
import LandingPlant from '../../components/LandingPlant';
import Login from '../../components/Login';
import { wrapper } from './LoginPage.module.scss';

const LoginPage = () => (
  <>
    <Background />
    <div className={wrapper}>
      <LandingPlant />
      <Login />
    </div>
  </>
);

export default LoginPage;
