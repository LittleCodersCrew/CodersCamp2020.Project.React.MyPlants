/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { hide, overlay, modal } from './ModalEditProfile.module.scss';

const ModalEditProfile = (props) => {
  const { show, closeModal } = props;
  return (
    <>
      <div className={show ? overlay : hide} onClick={closeModal} />
      <div className={show ? modal : hide}>
        <button onClick={closeModal}>X</button>
        <h1>Modal heading</h1>
        <p>This is modal content</p>
      </div>
    </>
  );
};

ModalEditProfile.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ModalEditProfile;
