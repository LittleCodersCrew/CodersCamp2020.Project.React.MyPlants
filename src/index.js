import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Navbar from './components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);
