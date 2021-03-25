import React from 'react';
import styles from './Login.module.scss';
import Logo from '../../assets/logo.png';

function Login() {
  return (
    <div className={styles.login}>
      <form>
        <div className={styles.logo}>
          <img src={Logo} alt="myplants logo" />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} type="email" id="email" placeholder="E-mail" />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} type="password" id="password" placeholder="Password" />
        </div>
        <div className={styles.buttons}>
          <input className={styles.btn} type="submit" value="Login" />
          <input className={styles.btn} type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}
export default Login;
