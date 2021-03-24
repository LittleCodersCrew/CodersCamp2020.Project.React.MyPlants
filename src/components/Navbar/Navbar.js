import React from 'react';
import styles from './Navbar.module.scss';

import Search from '../../assets/icons/Search.png';
import Chat from '../../assets/icons/Chat.png';
import Profile from '../../assets/icons/Profile.png';
import Users from '../../assets/icons/3 User.png';
import Calendar from '../../assets/icons/Calendar.png';
import Leaf from '../../assets/icons/Leaf.png';

function Navbar() {
//   let loggedOut = (
//       <ul className={styles.navbar}>
//           <li className={styles.li}>
//             <a className={window.location.pathname === '/plant' ?
//              `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/plant">Plants</a>
//             <img src= { Search } alt="search" height="40px" width="40px"/>
//           </li>
//           <li className={styles.li}>
//             <a className={window.location.pathname === '/chat' ?
//             `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/chat">Chat</a>
//             <img src= { Chat } alt="chat" height="40px" width="40px"/>
//           </li>
//           <li className={styles.li}>
//             <a className={window.location.pathname === '/lohin' ?
//             `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/login">Login</a>
//             <img src= { Profile } alt="profile" height="40px" width="40px"/>
//           </li>
//       </ul>
//   );
//   let loggedIn = (
  // <ul className={styles.navbar}>
  //   <li className={styles.li}>
  //     <a className={window.location.pathname === '/garden' ?
  //     `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/garden">My garden</a>
  //     <img src={Leaf} alt="leaf" height="40px" width="40px" />
  //   </li>
  //   <li className={styles.li}>
  //     <a className={window.location.pathname === '/users' ?
  //     `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/users">Users</a>
  //     <img src={Users} alt="users" height="40px" width="40px" />
  //   </li>
  //   <li className={styles.li}>
  //     <a className={window.location.pathname === '/events' ?
  //     `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/events">Events</a>
  //     <img src={Calendar} alt="calendar" height="40px" width="40px" />
  //   </li>
  //   <li className={styles.li}>
  //     <a className={window.location.pathname === '/plant' ?
  //     `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/plant">Plants</a>
  //     <img src={Search} alt="search" height="40px" width="40px" />
  //   </li>
  //   <li className={styles.li}>
  //     <a className={window.location.pathname === '/chat' ?
  //     `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/chat">Chat</a>
  //     <img src={Chat} alt="chat" height="40px" width="40px" />
  //   </li>
  //   <li className={styles.li}>
  //     <a className={window.location.pathname === '/login' ?
  //     `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/login">Login</a>
  //     <img src={Profile} alt="profile" height="40px" width="40px" />
  //   </li>
  // </ul>
//   );

  return (
    <ul className={styles.navbar}>
      <li className={styles.li}>
        <a className={window.location.pathname === '/garden' ? `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/garden">My garden</a>
        <img src={Leaf} alt="leaf" height="40px" width="40px" />
      </li>
      <li className={styles.li}>
        <a className={window.location.pathname === '/users' ? `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/users">Users</a>
        <img src={Users} alt="users" height="40px" width="40px" />
      </li>
      <li className={styles.li}>
        <a className={window.location.pathname === '/events' ? `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/events">Events</a>
        <img src={Calendar} alt="calendar" height="40px" width="40px" />
      </li>
      <li className={styles.li}>
        <a className={window.location.pathname === '/plant' ? `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/plant">Plants</a>
        <img src={Search} alt="search" height="40px" width="40px" />
      </li>
      <li className={styles.li}>
        <a className={window.location.pathname === '/chat' ? `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/chat">Chat</a>
        <img src={Chat} alt="chat" height="40px" width="40px" />
      </li>
      <li className={styles.li}>
        <a className={window.location.pathname === '/login' ? `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/login">Login</a>
        <img src={Profile} alt="profile" height="40px" width="40px" />
      </li>
    </ul>
  );
}

export default Navbar;
