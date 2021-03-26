import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import AuthorsList from './components/AuthorsList/AuthorsList';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar isLoggedIn />
    <AuthorsList />
  </React.StrictMode>,
  document.getElementById('root')
);
