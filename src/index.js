import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/CodersCamp2020.Project.React.MyPlants">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
