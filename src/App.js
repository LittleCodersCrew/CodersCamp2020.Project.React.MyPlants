/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import AuthorsPage from './containers/AuthorsPage';
import SearchPlantsPage from './containers/SearchPlants/SearchPlants';
import ChatPage from './containers/ChatPage';
import NewPlantsPage from './containers/NewPlantsPage';
import Footer from './components/Footer';
import useToken from './hooks/useToken/useToken';
import Database from './database';

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
  const [userName, setUserName] = useState('');
  const [ifAdmin, setIfAdmin] = useState();
  const { token } = useToken();

  useEffect(() => {
    if (token) {
      const userId = JSON.parse(atob(token.split('.')[1])).id;
      fetch(`${Database.URL}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }, {})
        .then((data) => data.json())
        .then((json) => {
          setUserName(json.name);
          setIfAdmin(json.admin);
        });
    }
  });

  return (
    <>
      <Navbar name={userName} admin={ifAdmin} />
      <Switch>
        <Route path="/" exact>
          <SearchPlantsPage />
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
        <Route path="/login" exact>
          <LoginPage />
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
        <Route path="/options" exact>
          <NewPlantsPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
