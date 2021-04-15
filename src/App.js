import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
import AddPlant from './containers/AddPlant';
import Footer from './components/Footer';
import Database from './database';
import Garden from './containers/GardenPage';
import URL from './constants/URL';

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
        <Route path={`${URL}/`} exact>
          <Redirect to={`${URL}/plant`} />
        </Route>
        <Route path={`${URL}/plant/:plantNameFromURL`} exact>
          <PlantPage />
        </Route>
        <Route path={`${URL}/plant`} exact>
          <SearchPlantsPage />
        </Route>
        <Route path={`${URL}/add-plant`} exact>
          <AddPlant />
        </Route>
        <Route path={`${URL}/chat`} exact>
          <ChatPage />
        </Route>
        <Route path={`${URL}/garden`} exact>
          <Garden />
        </Route>
        <Route path={`${URL}/users`} exact>
          <SearchUsersPage />
        </Route>
        <Route path={`${URL}/register`} exact>
          <RegisterPage />
        </Route>
        <Route path={`${URL}/login`} exact>
          <LoginPage />
        </Route>
        <Route path={`${URL}/events`} exact>
          <CalendarPage />
        </Route>
        <Route path={`${URL}/myprofile/:id`} exact>
          <UserPage />
        </Route>
        <Route path={`${URL}/user/:id`} exact>
          <UserPage />
        </Route>
        <Route path={`${URL}/logout`} exact>
          <Logout />
        </Route>
        <Route path={`${URL}/authors`} exact>
          <AuthorsPage />
        </Route>
        <Route path={`${URL}/options`} exact>
          {ifAdmin ? <NewPlantsPage /> : <p>Such page does not exist</p>}
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
