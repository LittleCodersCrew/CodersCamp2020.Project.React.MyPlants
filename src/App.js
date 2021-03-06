import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
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

function Logout() {
  const history = useHistory();
  localStorage.removeItem('token');
  history.push('/');
  window.location.reload();
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
        <Route path="/add-plant" exact>
          <AddPlant />
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
        <Route path="/myprofile/:id" exact>
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
