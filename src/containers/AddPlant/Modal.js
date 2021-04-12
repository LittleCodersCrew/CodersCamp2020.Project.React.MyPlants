/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { hide, modal, summary } from './AddPlant.module.scss';
import Button from '../../components/Button';

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

  return (
    <div className={show ? modal : hide}>
      <div className={summary}>
        <p>
          name:
          {name}
        </p>
        <p>
          latin name:
          {latin}
        </p>
        <p>
          Min. Temperature:
          {minTemp}
        </p>
        <p>
          Max. Temperature:
          {maxTemp}
        </p>
        <p>
          Sunlight:
          {sunlight}
        </p>
        <p>
          Humidity:
          {humidity}
        </p>
        <p>
          Watering:
          {watering}
        </p>
        <p>
          Watering Method:
          {wateringMethod}
        </p>
        <p>
          Application:
          {application}
        </p>
        <p>
          Subsoil:
          {subsoil}
        </p>
        <p>
          Conditioners:
          {conditioners}
        </p>
        <p>
          Spraying:
          {spraying}
        </p>
      </div>
      <Button text="Save" onClick={closeModal} />
    </div>
  );
};

export default Modal;
