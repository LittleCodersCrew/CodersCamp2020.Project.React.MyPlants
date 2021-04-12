/* eslint-disable react/prop-types */
import React from 'react';
import { hide, modal } from './AddPlant.module.scss';

const Modal = (props) => {
  const { show, closeModal, name, latin } = props;
  return (
    <div className={show ? modal : hide}>
      <input type="text" value={name} />
      <input type="text" value={latin} />
      <button onClick={closeModal}>X</button>
    </div>
  );
};

export default Modal;
