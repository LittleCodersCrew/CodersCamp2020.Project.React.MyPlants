/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { hide, modal } from './AddPlant.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Modal = (props) => {
  const { show, closeModal, name, latin } = props;
  console.log(name, latin);
  return (
    <div className={show ? modal : hide}>
      <Input text={name} />
      <Input text={latin} />
      <Button onClick={closeModal} text="X" />
    </div>
  );
};

export default Modal;
