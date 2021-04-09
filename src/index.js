import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import Calendar from './components/Calendar';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Calendar />
      {/* <App /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
