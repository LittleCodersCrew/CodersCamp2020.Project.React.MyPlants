import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import Logo from '../../assets/logo.png';
import Database from '../../database';

function Login({ setToken }) {
  const { register, handleSubmit } = useForm();

  const loginUser = async (email, password) => fetch(`${Database.URL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then((data) => data.json());

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const response = await loginUser(data.email, data.password);
    const { token } = response;
    if (!token) {
      // eslint-disable-next-line no-alert
      alert(response.error);
    } else {
      setToken(token);
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.logo}>
          <img src={Logo} alt="myplants logo" />
        </div>
        <div className={styles.formInput}>
          <input
            className={styles.input}
            type="email"
            id="email"
            placeholder="E-mail"
            ref={register({ required: true })}
            name="email"
          />
        </div>
        <div className={styles.formInput}>
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="Password"
            ref={register({ required: true, maxLength: 15 })} // nie pamiętam jaki mielismy limit
            name="password"
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.btn}>Login</button>
          <button type="button" className={styles.btn}>Register</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = { setToken: PropTypes.func.isRequired };

export default Login;
