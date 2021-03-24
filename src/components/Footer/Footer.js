import React from 'react';
import styles from './Footer.module.scss';

import Heart from '../../assets/icons/Heart.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={Heart} alt="heart" height="40px" width="40px" />
        <a className={window.location.pathname === '/authors' ? `${styles.link} ${styles.clicked}` : `${styles.link}`} href="/authors">Authors</a>
      </div>
      <p className={styles.copyright}>©2021 Copyright</p>
    </footer>
  );
}

export default Footer;
