import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import LandingPlant from './components/LandingPlant/LandingPlant';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LandingPlant />
  </React.StrictMode>,
  document.getElementById('root')
);
