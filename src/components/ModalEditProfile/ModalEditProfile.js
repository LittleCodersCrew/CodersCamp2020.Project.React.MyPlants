import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Text from '../Text';
import useToken from '../../hooks/useToken/useToken';
import Database from '../../database';
import { hide, overlay, modal, form, input, button, error } from './ModalEditProfile.module.scss';
import closeSquare from '../../assets/icons/CloseSquare.png';

const ModalEditProfile = (props) => {
  const [errorLogin, setErrorLogin] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const { show, closeModal } = props;

  const { register, errors, handleSubmit, watch } = useForm();
  const password = useRef();
  password.current = watch('password', '');

  const { token } = useToken();
  const [user, setUser] = useState({
    name: '',
    surname: '',
    login: '',
    email: ''
  });

  const [userData, setUserData] = useState({
    password: '',
    confirmPassword: ''
  });

  const updateField = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const userId = JSON.parse(atob(token.split('.')[1])).id;

  const editUser = async (user1) => fetch(`${Database.URL}/user/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(user1)
  }).then((data) => {
    if (data.status === 200) {
      window.location.reload();
    }
    return data.json();
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const response = await editUser(userData);
    if (response?.errors) {
      if (response.errors.includes('Login')) setErrorLogin(response.errors);
      else setErrorLogin('');
      if (response.errors.includes('E-mail')) setErrorEmail(response.errors);
      else setErrorEmail('');
    }
  };

  useEffect(() => {
    fetch(`${Database.URL}/user/${userId}`, { headers: { Authorization: `Bearer ${token}` } }, {})
      .then((data) => data.json())
      .then((json) => setUser({
        name: json.name,
        surname: json.surname,
        login: json.login,
        email: json.email
      }));
  });

  return (
    <>
      <div
        className={show ? overlay : hide}
        onClick={closeModal}
        onKeyDown={closeModal}
        role="button"
        tabIndex="0"
      />
      <div className={show ? modal : hide}>
        <button onClick={closeModal}>
          <img src={closeSquare} alt="close" />
        </button>

        <div className={form}>
          <Text text="Edit your profile" fontsize="1.8rem" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                name="name"
                className={input}
                placeholder={user.name}
                onChange={updateField}
                ref={register({
                  minLength: {
                    value: 3,
                    message: 'Name must have at least 3 characters.'
                  },
                  maxLength: {
                    value: 15,
                    message: "Name can't be longer than 15 characters."
                  },
                  pattern: /^[A-Za-z]+$/i
                })}
              />
              {errors.name && <p className={error}>{errors.name.message}</p>}
            </div>
            <div>
              <input
                name="surname"
                className={input}
                placeholder={user.surname}
                onChange={updateField}
                ref={register({
                  minLength: {
                    value: 3,
                    message: 'Surame must have at least 3 characters.'
                  },
                  maxLength: {
                    value: 25,
                    message: "Surname can't be longer than 25 characters."
                  },
                  pattern: /^[A-Za-z]+$/i
                })}
              />
              {errors.surname && <p className={error}>{errors.surname.message}</p>}
            </div>
            <div>
              <input
                name="login"
                className={input}
                placeholder={user.login}
                onChange={updateField}
                ref={register({
                  minLength: {
                    value: 3,
                    message: 'Login must have at least 3 characters.'
                  },
                  maxLength: {
                    value: 10,
                    message: "Login can't be longer than 10 characters."
                  }
                })}
              />
              {errors.login && <p className={error}>{errors.login.message}</p>}
              <p className={error}>{errorLogin}</p>
            </div>
            <div>
              <input
                name="email"
                className={input}
                type="email"
                placeholder={user.email}
                onChange={updateField}
                ref={register({
                  minLength: {
                    value: 4,
                    message: 'Invalid e-mail.'
                  }
                })}
              />
              {errors.email && <p className={error}>{errors.email.message}</p>}
              <p className={error}>{errorEmail}</p>
            </div>
            <div>
              <input
                name="password"
                className={input}
                type="password"
                placeholder="Password *"
                onChange={updateField}
                ref={register({
                  required: 'Password is required.',
                  minLength: {
                    value: 5,
                    message: 'Password must have at least 5 characters.'
                  }
                })}
              />
              {errors.password && <p className={error}>{errors.password.message}</p>}
            </div>
            <div>
              <input
                name="confirmPassword"
                className={input}
                type="password"
                placeholder="Repeat password *"
                onChange={updateField}
                ref={register({
                  required: 'Confirming password is required.',
                  validate: (value) => value === password.current || 'Passwords do not match.'
                })}
              />
              {errors.confirmPassword && <p className={error}>{errors.confirmPassword.message}</p>}
            </div>
            <div>
              <button type="submit" className={button}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

ModalEditProfile.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ModalEditProfile;
