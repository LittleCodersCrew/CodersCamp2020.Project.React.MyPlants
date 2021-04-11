/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { navbar, link, li, clicked, CHamburger } from './Navbar.module.scss';
import { OHamburger } from './Hamburger.module.scss';
import Search from '../../assets/icons/Search.png';
import Chat from '../../assets/icons/Chat.png';
import Profile from '../../assets/icons/Profile.png';
import Users from '../../assets/icons/3 User.png';
import Calendar from '../../assets/icons/Calendar.png';
import Leaf from '../../assets/icons/Leaf.png';
import Logout from '../../assets/icons/Logout.png';
import Crown from '../../assets/icons/Crown.png';
import Menu from '../../assets/icons/Menu.png';

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

const Navbar = ({ name, admin }) => {
  const [ifOpen, setIfOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation().pathname;
  const node = useRef();

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      window.addEventListener('resize', () => setWidth(window.innerWidth));
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(node, () => setIfOpen(false));

  const checkAdmin = admin === false ? [
    ['/garden', location, 'My garden', Leaf, 'leaf'],
    ['/users', location, 'Users', Users, 'users'],
    ['/events', location, 'Events', Calendar, 'calendar'],
    ['/plant', location, 'Plants', Search, 'search'],
    ['/chat', location, 'Chat', Chat, 'chat'],
    ['/myprofile', location, name, Profile, 'profile'],
    ['/logout', location, 'Logout', Logout, 'logout']
  ] : [
    ['/garden', location, 'My garden', Leaf, 'leaf'],
    ['/users', location, 'Users', Users, 'users'],
    ['/events', location, 'Events', Calendar, 'calendar'],
    ['/plant', location, 'Plants', Search, 'search'],
    ['/chat', location, 'Chat', Chat, 'chat'],
    ['/options', location, 'Options', Crown, 'crown'],
    ['/myprofile', location, name, Profile, 'profile'],
    ['/logout', location, 'Logout', Logout, 'logout']
  ];

  const items = name === '' ? [
    ['/plant', location, 'Plants', Search, 'search'],
    ['/chat', location, 'Chat', Chat, 'chat'],
    ['/login', location, 'Login', Profile, 'profile']
  ] : checkAdmin;

  return (
    <div className={width < 923 && ifOpen ? OHamburger : CHamburger} ref={node}>
      <img src={Menu} alt="Menu" height="40px" width="40px" onClick={() => setIfOpen(!ifOpen)} />
      <nav>
        <ul className={navbar}>
          {items.map((item) => createItem(...item))}
        </ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  name: PropTypes.string,
  admin: PropTypes.bool
};

Navbar.defaultProps = {
  name: '',
  admin: false
};

export default Navbar;
