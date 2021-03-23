import './Footer.scss';
import React from 'react';

import Heart from '../../assets/icons/Heart.png';

function Footer() {
  return (
    <footer className="footer-container">
        <div className="link-container">
            <img src= { Heart } alt="heart" height="40px" width="40px"/>
            <a className="footer-link" href="#authors">Authors</a>
        </div>
        <p className="copyright">©2021 Copyright</p>
    </footer>
  );
}

export default Footer;
