import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Register from './components/Register/Register';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);
