import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import styles, { error } from './Login.module.scss';
import Logo from '../../assets/logo.png';
import Database from '../../database';
import URL from '../../constants/URL';

function Login({ setToken }) {
  const [errorFromResponse, setErrorsFromResponse] = useState('');
  const { register, handleSubmit, errors } = useForm();

  const loginUser = async (email, password) => fetch(`${Database.URL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    redirect: 'follow'
  }).then((data) => data.json());

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const response = await loginUser(data.email, data.password);
    const { token } = response;
    if (!token) {
      setErrorsFromResponse(response.error);
    } else {
      setToken(token);
      window.location.replace('/');
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.logo}>
          <img src={Logo} alt="myplants logo" />
        </div>
        <div>
          <input
            className={styles.input}
            type="email"
            id="email"
            placeholder="E-mail"
            name="email"
            ref={register({
              required: 'E-mail is required.',
              minLength: {
                value: 4,
                message: 'Invalid e-mail.'
              }
            })}
          />
          {errors.email && <p className={error}>{errors.email.message}</p>}
        </div>
        <div className={styles.formInput}>
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            ref={register({ required: 'You must specify the password.' })}
          />
          {errors.password && <p className={error}>{errors.password.message}</p>}
          <p className={error}>{errorFromResponse}</p>
        </div>
        <div>
          <button type="submit" className={styles.btn}>
            Login
          </button>

          <p className={styles.link}>
            New user?
            <Link to={`${URL}/register`} className={styles.redirect}>
              {' '}
              Create an account.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = { setToken: PropTypes.func.isRequired };

export default Login;
