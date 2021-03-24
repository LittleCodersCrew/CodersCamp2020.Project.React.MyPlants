import './Navbar.scss';
import React from 'react';

import Search from '../../assets/icons/Search.png';
import Chat from '../../assets/icons/Chat.png';
import Profile from '../../assets/icons/Profile.png';
import Users from '../../assets/icons/3 User.png';
import Calendar from '../../assets/icons/Calendar.png';
import Leaf from '../../assets/icons/Leaf.png';

function Navbar() {
//   let loggedOut = (
//       <ul className="nav-bar">
//           <li className="nav-li">
//             <a className="navbar-link" href="#plant">Plants</a>
//             <img src= { Search } alt="search" height="40px" width="40px"/>
//           </li>
//           <li className="nav-li">
//             <a className="navbar-link" href="#chat">Chat</a>
//             <img className="navbar-image" src= { Chat } alt="chat" height="40px" width="40px"/>
//           </li>
//           <li className="nav-li">
//             <a className="navbar-link" href="#login">Login</a>
//             <img src= { Profile } alt="profile" height="40px" width="40px"/>
//           </li>
//       </ul>
//   );
//   let loggedIn = (
//     <ul className="nav-bar">
//       <li className="nav-li">
//         <a className="navbar-link" href="#garden">My garden</a>
//         <img className="navbar-image" src= { Leaf } alt="leaf" height="40px" width="40px"/>
//       </li>
//       <li className="nav-li">
//         <a className="navbar-link" href="#users">Users</a>
//         <img className="navbar-image" src= { Users } alt="users" height="40px" width="40px"/>
//       </li>
//       <li className="nav-li">
//         <a className="navbar-link" href="#events">Events</a>
//         <img className="navbar-image" src= { Calendar } alt="calendar" height="40px" width="40px"/>
//       </li>
//       <li className="nav-li">
//         <a className="navbar-link" href="#plant">Plants</a>
//         <img src= { Search } alt="search" height="40px" width="40px"/>
//       </li>
//       <li className="nav-li">
//         <a className="navbar-link" href="#chat">Chat</a>
//         <img className="navbar-image" src= { Chat } alt="chat" height="40px" width="40px"/>
//       </li>
//       <li className="nav-li">
//         <a className="navbar-link" href="#login">Login</a>
//         <img src= { Profile } alt="profile" height="40px" width="40px"/>
//       </li>
//    </ul>
//   );

  return (
    <ul className="nav-bar">
          <li className="nav-li">
            <a className="navbar-link" href="#garden">My garden</a>
            <img className="navbar-image" src= { Leaf } alt="leaf" height="40px" width="40px"/>
          </li>
          <li className="nav-li">
            <a className="navbar-link" href="#users">Users</a>
            <img className="navbar-image" src= { Users } alt="users" height="40px" width="40px"/>
          </li>
          <li className="nav-li">
            <a className="navbar-link" href="#events">Events</a>
            <img className="navbar-image" src= { Calendar } alt="calendar" height="40px" width="40px"/>
          </li>
          <li className="nav-li">
            <a className="navbar-link" href="#plant">Plants</a>
            <img src= { Search } alt="search" height="40px" width="40px"/>
          </li>
          <li className="nav-li">
            <a className="navbar-link" href="#chat">Chat</a>
            <img className="navbar-image" src= { Chat } alt="chat" height="40px" width="40px"/>
          </li>
          <li className="nav-li">
            <a className="navbar-link" href="#login">Login</a>
            <img src= { Profile } alt="profile" height="40px" width="40px"/>
          </li>
    </ul>
  );
}

export default Navbar;
