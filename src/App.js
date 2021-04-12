/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import AuthorsPage from './containers/AuthorsPage';
import useToken from './hooks/useToken/useToken';
import PlantPage from './containers/PlantPage';
import SearchPlantsPage from './containers/SearchPlants/SearchPlants';
import SearchUsersPage from './containers/SearchUsers/SearchUsers';
import ChatPage from './containers/ChatPage';
import UserPage from './containers/UserPage';
import CalendarPage from './containers/CalendarPage';
import NewPlantsPage from './containers/NewPlantsPage';
import Footer from './components/Footer';
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
      fetch(
        `${Database.URL}/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        },
        {}
      )
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
          <Redirect to="/plant" />
        </Route>
        <Route path="/plant/:plantNameFromURL" exact>
          <PlantPage />
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
          <SearchUsersPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/events" exact>
          <CalendarPage />
        </Route>
        <Route path="/myprofile" exact>
          <UserPage />
        </Route>
        <Route path="/user/:id" exact>
          <UserPage />
        </Route>
        <Route path="/logout" exact>
          <Logout />
        </Route>
        <Route path="/authors" exact>
          <AuthorsPage />
        </Route>
        <Route path="/options" exact>
          {ifAdmin ? <NewPlantsPage /> : <p>Such page does not exist</p>}
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
