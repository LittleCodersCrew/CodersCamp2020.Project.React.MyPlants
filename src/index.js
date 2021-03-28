import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import Select from './components/Select/Select';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Select title="watering" values={['aaa', 'bbb', 'ccc']} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
