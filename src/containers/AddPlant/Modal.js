/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { hide, modal } from './AddPlant.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Modal = (props) => {
  const { show, closeModal, inputs } = props;
  console.log(inputs);
  return (
    <div className={show ? modal : hide}>
      <Input text={inputs} />
      <Input text={inputs} />
      <Button onClick={closeModal}>X</Button>
    </div>
  );
};

export default Modal;
