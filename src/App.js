/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';

function Home() {
  return <h2>About</h2>;
}

function Plants() {
  return <h2>Plants</h2>;
}

function Chat() {
  return <h2>Chat</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function Garden() {
  return <h2>Garden</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Calendar() {
  return <h2>Calendar</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}

const App = () => {
  const location = useLocation().pathname;
  const [userName, setUserName] = useState('Test');

  return (
    <>
      <Navbar name={userName} location={location} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/plant" exact>
          <Plants />
        </Route>
        <Route path="/chat" exact>
          <Chat />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/garden" exact>
          <Garden />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/events" exact>
          <Calendar />
        </Route>
        <Route path="/myprofile" exact>
          <Profile />
        </Route>
      </Switch>
    </>
  );
};

export default App;
