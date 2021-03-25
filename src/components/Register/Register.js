import React from 'react';
import styles from './Register.module.scss';
import Logo from '../../assets/logo.png';

function Register() {
  return (
    <div className={styles.login}>
      <form>
        <div className={styles.logo}>
          <img src={Logo} alt="myplants logo" />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} placeholder="Name" />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} placeholder="Surname" />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} placeholder="Login" />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} type="email" placeholder="E-mail" />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} placeholder="Password" />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} placeholder="Repeat password" />
        </div>
        <div className={styles.buttons}>
          <input className={styles.btn} type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}
export default Register;
