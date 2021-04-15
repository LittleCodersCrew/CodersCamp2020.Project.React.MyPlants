import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { authors, link, mentor, logo } from './AuthorsList.module.scss';

const createItem = (webpage, text, isMentor = false) => {
  const classes = [link, isMentor ? mentor : ''];

  return (
    <Link key={webpage} className={classes.join(' ')} to={webpage} target="_blank" rel="noreferrer">
      {text}
    </Link>
  );
};

const AuthorsList = () => {
  const items = [
    ['https://github.com/adax10', 'Adrianna Krupa', false],
    ['https://github.com/Suegro24', 'Dominik Puchała', false],
    ['https://github.com/Nilphym', 'Jędrzej Ratajczak', false],
    ['https://github.com/kami3la', 'Kamila Grusza', false],
    ['https://github.com/KonradMierzejewski', 'Konrad Mierzejewski', false],
    ['https://github.com/brzeczkowskaw', 'Weronika Brzęczkowska-Kuzianik', false],
    ['https://github.com/ruljin', 'Filip Kuca - mentor', true]
  ];

  return (
    <div className={authors}>
      <div className={logo}>
        <img src={Logo} alt="myplants logo" />
      </div>
      {items.map((item) => createItem(...item))}
    </div>
  );
};

export default AuthorsList;
