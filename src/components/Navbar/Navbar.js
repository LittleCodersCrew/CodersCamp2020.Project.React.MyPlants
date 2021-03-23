import './Navbar.scss';
import React from 'react';

import Search from '../../assets/icons/Search.png';
import Chat from '../../assets/icons/Chat.png';
import Profile from '../../assets/icons/Profile.png';

function Navbar() {
//   let loggedIn = (
//       <ul className="nav-bar">
//           <li>
//             <a className="navbar-link" href="/plant">Plants</a>
//             <img src= { Search } alt="search" height="40px" width="40px"/>
//           </li>
//       </ul>
//   )
  return (
    <ul className="nav-bar">
          <li className="nav-li">
            <a className="navbar-link" href="#plant">Plants</a>
            <img src= { Search } alt="search" height="40px" width="40px"/>
          </li>
          <li className="nav-li">
            <a className="navbar-link" href="#chat">Chat</a>
            <img src= { Chat } alt="chat" height="40px" width="40px"/>
          </li>
          <li className="nav-li">
            <a className="navbar-link" href="#login">Login</a>
            <img src= { Profile } alt="profile" height="40px" width="40px"/>
          </li>
    </ul>
  );
}

export default Navbar;