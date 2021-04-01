import React from 'react';
import LandingPlant from '../../components/LandingPlant';
import AuthorsList from '../../components/AuthorsList';
import { wrapper, background } from './AuthorsPage.module.scss';

const AuthorsPage = () => (
  <>
    <div className={wrapper}>
      <LandingPlant />
      <AuthorsList />
    </div>
    <div className={background} />
  </>
);

export default AuthorsPage;
