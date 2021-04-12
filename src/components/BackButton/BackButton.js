import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/icons/Arrow - Left Circle.png';
import styles from './backButton.module.scss';

const BackButton = () => (
  <Link className={styles.backBtn} to="/">
    <img src={backIcon} alt="Go back" />
    <p>Back to search</p>
  </Link>
);

export default BackButton;
