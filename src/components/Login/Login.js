import React, { useState } from 'react';
import styles from './Login.module.scss';
import Logo from '../../assets/logo.png';

function Login() {
  const [value, setValue] = useState({
    email: '',
    password: ''
  });

  const inputHandler = (e) => {
    setValue({ [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.login}>
      <form onChange={submit}>
        <div className={styles.logo}>
          <img src={Logo} alt="myplants logo" />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} type="email" id="email" placeholder="E-mail" onChange={inputHandler} value={value.email} />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} type="password" id="password" placeholder="Password" onChange={inputHandler} value={value.password} />
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
