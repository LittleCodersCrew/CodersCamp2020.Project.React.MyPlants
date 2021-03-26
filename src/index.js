import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import LandingPlant from './components/LandingPlant/LandingPlant';
import Navbar from './components/Navbar/Navbar';
import AuthorsList from './components/AuthorsList/AuthorsList';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar isLoggedIn />
    <AuthorsList />
    <LandingPlant />
  </React.StrictMode>,
  document.getElementById('root')
);
