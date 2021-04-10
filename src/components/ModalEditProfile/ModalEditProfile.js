import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import { hide, overlay, modal, form, input, button } from './ModalEditProfile.module.scss';
import closeSquare from '../../assets/icons/CloseSquare.png';

const ModalEditProfile = (props) => {
  const { show, closeModal } = props;
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
          <form>
            <div>
              <input name="name" className={input} placeholder="Name" />
            </div>
            <div>
              <input name="surname" className={input} placeholder="Surname" />
            </div>
            <div>
              <input name="login" className={input} placeholder="Login" />
            </div>
            <div>
              <input name="email" className={input} type="email" placeholder="E-mail" />
            </div>
            <div>
              <input name="password" className={input} type="password" placeholder="Password" />
            </div>
            <div>
              <input
                name="confirmPassword"
                className={input}
                type="password"
                placeholder="Repeat password"
              />
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
