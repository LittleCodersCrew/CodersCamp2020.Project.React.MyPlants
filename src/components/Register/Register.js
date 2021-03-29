import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Register.module.scss';
import Logo from '../../assets/logo.png';
import Database from '../../database';

function Register() {
  const { register, errors, handleSubmit, watch } = useForm();
  const password = useRef();
  password.current = watch('password', '');

  const registerUser = async (user) => {
    fetch(`${Database.URL}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).then((data) => data);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    registerUser(data);
  };

  return (
    <div className={styles.login}>
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
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Name must have at least 3 characters'
              },
              maxLength: {
                value: 15,
                message: 'Name can not be longer than 15 characters'
              },
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className={styles.formInput}>
          <input
            name="surname"
            className={styles.input}
            placeholder="Surname"
            ref={register({
              required: 'Surname is required',
              minLength: {
                value: 3,
                message: 'Surame must have at least 3 characters'
              },
              maxLength: {
                value: 25,
                message: 'Surname can not be longer than 25 characters'
              },
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors.surname && <p>{errors.surname.message}</p>}
        </div>
        <div className={styles.formInput}>
          <input
            name="login"
            className={styles.input}
            placeholder="Login"
            ref={register({
              required: 'Login is required',
              minLength: {
                value: 3,
                message: 'Login must have at least 3 characters'
              },
              maxLength: {
                value: 10,
                message: 'Login can not be longer than 10 characters'
              }
            })}
          />
          {errors.login && <p>{errors.login.message}</p>}
        </div>
        <div className={styles.formInput}>
          <input
            name="email"
            className={styles.input}
            type="email"
            placeholder="E-mail"
            ref={register({
              required: 'e-mail is required',
              minLength: {
                value: 4,
                message: 'Invalid e-mail'
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className={styles.formInput}>
          <input
            name="password"
            className={styles.input}
            type="password"
            placeholder="Password"
            ref={register({
              required: 'You must specify password',
              minLength: {
                value: 5,
                message: 'Password must have at least 5 characters'
              }
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className={styles.formInput}>
          <input
            name="confirmPassword"
            className={styles.input}
            type="password"
            placeholder="Repeat password"
            ref={register({ validate: (value) => value === password.current || 'Passwords do not match' })}
          />
          {errors.pass_repeat && <p>{errors.pass_repeat.message}</p>}
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.btn}>Register</button>
        </div>
      </form>
    </div>
  );
}
export default Register;
