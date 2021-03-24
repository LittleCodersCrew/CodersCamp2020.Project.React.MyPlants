import styles from './Footer.module.scss';
import React from 'react';

import Heart from '../../assets/icons/Heart.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={Heart} alt="heart" height="40px" width="40px" />
        <a className={styles.link} href="#authors">Authors</a>
      </div>
      <p className={styles.copyright}>©2021 Copyright</p>
    </footer>
  );
}

export default Footer;
