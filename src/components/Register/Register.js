import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Register.module.scss';
import Logo from '../../assets/logo.png';

function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => e.preventDefault();

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.logo}>
          <img src={Logo} alt="myplants logo" />
        </div>
        <div className={styles.formInput}>
          <input
            className={styles.input}
            placeholder="Name"
            ref={register({ required: true, maxLength: 15, pattern: /^[A-Za-z]+$/i })}
          />
        </div>
        <div className={styles.formInput}>
          <input
            className={styles.input}
            placeholder="Surname"
            ref={register({ required: true, maxLength: 15, pattern: /^[A-Za-z]+$/i })}
          />
        </div>
        <div className={styles.formInput}>
          <input
            className={styles.input}
            placeholder="Login"
            ref={register({ required: true, maxLength: 10 })}
          />
        </div>
        <div className={styles.formInput}>
          <input
            className={styles.input}
            type="email"
            placeholder="E-mail"
            ref={register({ required: true, maxLength: 10 })}
          />
        </div>
        <div className={styles.formInput}>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            ref={register({ required: true, maxLength: 10 })}
          />
        </div>
        <div className={styles.formInput}>
          <input
            className={styles.input}
            type="password"
            placeholder="Repeat password"
            ref={register({ required: true, maxLength: 10 })}
          />
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.btn}>Register</button>
        </div>
      </form>
    </div>
  );
}
export default Register;
