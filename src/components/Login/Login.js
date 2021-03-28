import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Login.module.scss';
import Logo from '../../assets/logo.png';

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => e.preventDeafult();

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
          />
        </div>
        <div className={styles.formInput}>
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="Password"
            ref={register({ required: true, maxLength: 15 })} // nie pamiętam jaki mielismy limit
          />
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.btn}>Login</button>
          <button type="button" className={styles.btn}>Register</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
