import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
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
    <li key={path} className={li}>
      <Link className={classes.join(' ')} to={path}>
        <p>{linkName}</p>
        <img src={src} alt={alt} height="40px" width="40px" />
      </Link>
    </li>
  );
};

const Navbar = ({ name }) => {
  const location = useLocation().pathname;

  const items = name === '' ? [
    ['/plant', location, 'Plants', Search, 'search'],
    ['/chat', location, 'Chat', Chat, 'chat'],
    ['/login', location, 'Login', Profile, 'profile']
  ] : [
    ['/garden', location, 'My garden', Leaf, 'leaf'],
    ['/users', location, 'Users', Users, 'users'],
    ['/events', location, 'Events', Calendar, 'calendar'],
    ['/plant', location, 'Plants', Search, 'search'],
    ['/chat', location, 'Chat', Chat, 'chat'],
    ['/myprofile', location, name, Profile, 'profile']
  ];

  return (
    <nav>
      <ul className={navbar}>
        {items.map((item) => createItem(...item))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = { name: PropTypes.string };

Navbar.defaultProps = { name: '' };

export default Navbar;
