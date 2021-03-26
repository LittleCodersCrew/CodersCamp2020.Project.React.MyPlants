import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { link, clicked, footer, container, copyright } from './Footer.module.scss';
import Heart from '../../assets/icons/Heart.png';

function Footer() {
  const location = useLocation().pathname;
  const classes = [link, location === '/authors' ? clicked : ''];

  return (
    <footer className={footer}>
      <Link className={container} to="/authors">
        <img src={Heart} alt="heart" height="40px" width="40px" />
        <p className={classes.join(' ')}>Authors</p>
      </Link>
      <p className={copyright}>©2021 Copyright</p>
    </footer>
  );
}

export default Footer;
