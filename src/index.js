import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import AuthorsList from './components/AuthorsList/AuthorsList';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AuthorsList />
  </React.StrictMode>,
  document.getElementById('root')
);
