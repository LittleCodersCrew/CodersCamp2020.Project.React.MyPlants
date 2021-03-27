import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import Text from './components/Text/index';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Text text="Hello" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
