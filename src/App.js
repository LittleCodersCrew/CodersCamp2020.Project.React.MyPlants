import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import AuthorsPage from './containers/AuthorsPage';
import useToken from './hooks/useToken/useToken';
import Database from './database';

function Home() {
  return <h2>About</h2>;
}

function Plants() {
  return <h2>Plants</h2>;
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
  return window.location.replace('/');
}

const App = () => {
  const [userName, setUserName] = useState('');
  const { token } = useToken();

  useEffect(() => {
    if (token) {
      const userId = JSON.parse(atob(token.split('.')[1])).id;
      fetch(`${Database.URL}/user/${userId}`, { headers: { Authorization: `Bearer ${token}` } }, {})
        .then((data) => data.json())
        .then((json) => setUserName(json.name));
    }
  });

  return (
    <>
      <Navbar name={userName} />
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
      </Switch>
      <Footer />
    </>
  );
};

export default App;
