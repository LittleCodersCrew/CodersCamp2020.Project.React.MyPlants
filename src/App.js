/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import AuthorsList from './components/AuthorsList';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import useToken from './hooks/useToken/useToken';
import AddPlant from './containers/AddPlant/AddPlant';

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

const App = () => {
  const [userName, setUserName] = useState('Test');
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <>
        <Switch>
          <Route path="/login" exact>
            <Login setToken={setToken} />
          </Route>
          <Route path="/register" exact>
            <Register />
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
          <Plants />
          <AddPlant />
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
          <Register />
        </Route>
        <Route path="/events" exact>
          <Calendar />
        </Route>
        <Route path="/myprofile" exact>
          <Profile />
        </Route>
        <Route path="/authors" exact>
          <AuthorsList />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
