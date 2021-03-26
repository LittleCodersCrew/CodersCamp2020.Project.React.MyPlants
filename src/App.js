/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';

function About() {
  return <h2>About</h2>;
}

const App = () => {
  const location = useLocation().pathname;
  const [userName, setUserName] = useState('Test');

  return (
    <>
      <Navbar name={userName} location={location} />
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </>
  );
};

export default App;
