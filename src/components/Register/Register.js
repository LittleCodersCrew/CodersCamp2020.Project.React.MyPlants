import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles, { error } from './Register.module.scss';
import Logo from '../../assets/logo.png';
import Database from '../../database';

function Register() {
  const [errorLogin, setErrorLogin] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const { register, errors, handleSubmit, watch } = useForm();
  const password = useRef();
  password.current = watch('password', '');
  const history = useHistory();

  const registerUser = async (user) => fetch(`${Database.URL}/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }).then((data) => {
    if (data.status === 200) {
      history.push('/login');
    }
    return data.json();
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const response = await registerUser(data);
    if (response?.errors) {
      if (response.errors.includes('Login')) setErrorLogin(response.errors);
      else setErrorLogin('');
      if (response.errors.includes('E-mail')) setErrorEmail(response.errors);
      else setErrorEmail('');
    }
  };

  return (
    <div className={styles.register}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.logo}>
          <img src={Logo} alt="myplants logo" />
        </div>
        <div className={styles.formInput}>
          <input
            name="name"
            className={styles.input}
            placeholder="Name"
            ref={register({
              required: 'Name is required.',
              minLength: {
                value: 3,
                message: 'Name must have at least 3 characters.'
              },
              maxLength: {
                value: 15,
                message: 'Name can\'t be longer than 15 characters.'
              },
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors.name && <p className={error}>{errors.name.message}</p>}
        </div>
        <div className={styles.formInput}>
          <input
            name="surname"
            className={styles.input}
            placeholder="Surname"
            ref={register({
              required: 'Surname is required.',
              minLength: {
                value: 3,
                message: 'Surame must have at least 3 characters.'
              },
              maxLength: {
                value: 25,
                message: 'Surname can\'t be longer than 25 characters.'
              },
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors.surname && <p className={error}>{errors.surname.message}</p>}
        </div>
        <div className={styles.formInput}>
          <input
            name="login"
            className={styles.input}
            placeholder="Login"
            ref={register({
              required: 'Login is required.',
              minLength: {
                value: 3,
                message: 'Login must have at least 3 characters.'
              },
              maxLength: {
                value: 10,
                message: 'Login can\'t be longer than 10 characters.'
              }
            })}
          />
          {errors.login && <p className={error}>{errors.login.message}</p>}
          <p className={error}>{errorLogin}</p>
        </div>
        <div className={styles.formInput}>
          <input
            name="email"
            className={styles.input}
            type="email"
            placeholder="E-mail"
            ref={register({
              required: 'E-mail is required.',
              minLength: {
                value: 4,
                message: 'Invalid e-mail.'
              }
            })}
          />
          {errors.email && <p className={error}>{errors.email.message}</p>}
          <p className={error}>{errorEmail}</p>
        </div>
        <div className={styles.formInput}>
          <input
            name="password"
            className={styles.input}
            type="password"
            placeholder="Password"
            ref={register({
              required: 'You must specify the password.',
              minLength: {
                value: 5,
                message: 'Password must have at least 5 characters.'
              }
            })}
          />
          {errors.password && <p className={error}>{errors.password.message}</p>}
        </div>
        <div className={styles.formInput}>
          <input
            name="confirmPassword"
            className={styles.input}
            type="password"
            placeholder="Repeat password"
            ref={register({ validate: (value) => value === password.current || 'Passwords do not match.' })}
          />
          {errors.confirmPassword && <p className={error}>{errors.confirmPassword.message}</p>}
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.btn}>
            Register
          </button>

          <p className={styles.link}>
            You have an account?
            <Link to="/login" className={styles.redirect}>
              {' '}
              Log in.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Register;
