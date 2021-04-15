import React from 'react';
import Background from '../../components/Background';
import LandingPlant from '../../components/LandingPlant';
import Login from '../../components/Login';
import useToken from '../../hooks/useToken/useToken';
import { wrapper } from './LoginPage.module.scss';

const LoginPage = () => {
  const { setToken } = useToken();

  return (
    <>
      <Background>
        <div className={wrapper}>
          <LandingPlant />
          <Login setToken={setToken} />
        </div>
      </Background>
    </>
  );
};

export default LoginPage;
