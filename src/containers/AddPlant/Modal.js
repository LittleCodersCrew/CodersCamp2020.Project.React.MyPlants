/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { hide, modal, summary, editDelete } from './AddPlant.module.scss';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Modal = (props) => {
  const {
    show,
    closeModal,
    name,
    latin,
    minTemp,
    maxTemp,
    sunlight,
    humidity,
    watering,
    wateringMethod,
    application,
    subsoil,
    conditioners,
    spraying
  } = props;

  const editHandler = () => {

  };

  const deleteHandler = () => {

  };

  return (
    <div className={show ? modal : hide}>
      <div className={summary}>
        <Input text={name} />
        <Input text={latin} />
        <Input text={minTemp} />
        <Input text={maxTemp} />
        <Input text={sunlight} />
        <Input text={humidity} />
        <Input text={watering} />
        <Input text={wateringMethod} />
        <Input text={application} />
        <Input text={subsoil} />
        <Input text={conditioners} />
        <Input text={spraying} />
      </div>
      <div className={editDelete}>
        <Button text="Edit" onClick={editHandler} />
        <Button text="Delete" onClick={deleteHandler} />
      </div>
      <Button text="Save" onClick={closeModal} />
    </div>
  );
};

export default Modal;
