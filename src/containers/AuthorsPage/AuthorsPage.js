import React from 'react';
import Background from '../../components/Background';
import LandingPlant from '../../components/LandingPlant';
import AuthorsList from '../../components/AuthorsList';
import { wrapper } from './AuthorsPage.module.scss';

const AuthorsPage = () => (
  <>
    <Background>
      <div className={wrapper}>
        <LandingPlant />
        <AuthorsList />
      </div>
    </Background>
  </>
);

export default AuthorsPage;
