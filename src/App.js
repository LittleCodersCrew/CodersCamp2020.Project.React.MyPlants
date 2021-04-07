/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import AuthorsPage from './containers/AuthorsPage';
import SearchPlantsPage from './containers/SearchPlants/SearchPlants';
import ChatPage from './containers/ChatPage';

import Database from './database';

import useToken from './hooks/useToken/useToken';

function Home() {
  return <h2>About</h2>;
}

function Chat() {
  return <h2>Chat</h2>;
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

function Logout() {
  localStorage.removeItem('token');
  window.location.replace('/');
  return null;
}

const App = () => {
  const [userName, setUserName] = useState('Test');
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <>
        <Switch>
          <Route path="/login" exact>
            <LoginPage setToken={setToken} />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <Route path="/plant" exact>
            <Navbar />
            <SearchPlantsPage />
            <Footer />
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </>
    );
  }

  return (
    <>
      <Navbar name={userName} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/plant" exact>
          <SearchPlantsPage />
        </Route>
        <Route path="/chat" exact>
          <ChatPage />
        </Route>
        <Route path="/garden" exact>
          <Garden />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/events" exact>
          <Calendar />
        </Route>
        <Route path="/myprofile" exact>
          <Profile />
        </Route>
        <Route path="/logout" exact>
          <Logout />
        </Route>
        <Route path="/authors" exact>
          <AuthorsPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
