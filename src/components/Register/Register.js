import React, { useState } from 'react';
import styles from './Register.module.scss';
import Logo from '../../assets/logo.png';

function Register() {
  const [value, setValue] = useState({
    name: '',
    surname: '',
    login: '',
    email: '',
    password: '',
    repeatPassword: ''
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
          <input className={styles.input} placeholder="Name" onChange={inputHandler} value={value.name} />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} placeholder="Surname" onChange={inputHandler} value={value.surname} />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} placeholder="Login" onChange={inputHandler} value={value.login} />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} type="email" placeholder="E-mail" onChange={inputHandler} value={value.email} />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} type="password" placeholder="Password" onChange={inputHandler} value={value.password} />
        </div>
        <div className={styles.formInput}>
          <input className={styles.input} type="password" placeholder="Repeat password" onChange={inputHandler} value={value.repeatPassword} />
        </div>
        <div className={styles.buttons}>
          <input className={styles.btn} type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}
export default Register;
