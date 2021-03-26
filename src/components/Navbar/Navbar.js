import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { navbar, link, li, clicked } from './Navbar.module.scss';
import Search from '../../assets/icons/Search.png';
import Chat from '../../assets/icons/Chat.png';
import Profile from '../../assets/icons/Profile.png';
import Users from '../../assets/icons/3 User.png';
import Calendar from '../../assets/icons/Calendar.png';
import Leaf from '../../assets/icons/Leaf.png';

const createItem = (path, location, linkName, src, alt) => {
  const classes = [link, location === path ? clicked : ''];

  return (
    <li className={li}>
      <Link className={classes.join(' ')} to={path}>
        <p>{linkName}</p>
        <img src={src} alt={alt} height="40px" width="40px" />
      </Link>
    </li>
  );
};

const LoggedOut = ({ location }) => (
  <ul className={navbar}>
    {createItem('/plant', location, 'Plants', Search, 'search')}
    {createItem('/chat', location, 'Chat', Chat, 'chat')}
    {createItem('/login', location, 'Login', Profile, 'profile')}
  </ul>
);

const LoggedIn = ({ location, name }) => (
  <ul className={navbar}>
    {createItem('/garden', location, 'My garden', Leaf, 'leaf')}
    {createItem('/users', location, 'Users', Users, 'users')}
    {createItem('/events', location, 'Events', Calendar, 'calendar')}
    {createItem('/plant', location, 'Plants', Search, 'search')}
    {createItem('/chat', location, 'Chat', Chat, 'chat')}
    {createItem('/myprofile', location, name, Profile, 'profile')}
  </ul>
);

const Navbar = ({ name, location }) => (
  name === '' ? <LoggedOut location={location} /> : <LoggedIn location={location} name={name} />
);

LoggedOut.propTypes = { location: PropTypes.string.isRequired };

LoggedIn.propTypes = {
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

Navbar.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string.isRequired
};

Navbar.defaultProps = { name: '' };

export default Navbar;
