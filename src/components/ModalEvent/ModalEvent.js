/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Database from '../../database';
import Text from '../Text';
import Button from '../Button';
import Input from '../Input';
import useToken from '../../hooks/useToken/useToken';
import {
  hide,
  overlay,
  modal,
  button,
  submit,
  wrapper,
  eventDate,
  input,
  inputForm,
  events,
  eventName,
  eventButton
} from './ModalEvent.module.scss';
import closeSquare from '../../assets/icons/CloseSquare.png';

const ModalEvent = (props) => {
  const { show, closeModal, date } = props;
  const { token } = useToken();

  // const jsonDate = new Date().toJSON();

  // eslint-disable-next-line no-unused-vars
  const [event, setEvent] = useState({
    title: 'test',
    date: { date }
  });

  const userId = JSON.parse(atob(token.split('.')[1])).id;
  const sendEvent = (e) =>
    fetch(`${Database.URL}/calendar/user/${userId}/event`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(e)
    }).then((data) => {
      data.json();
    });

  const onSubmit = (e) => {
    e.preventDefault();
    const response = sendEvent(event);
    console.log(date);
  };

  const updateField = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

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
        <button className={button} onClick={closeModal}>
          <img src={closeSquare} alt="close" />
        </button>

        <div className={wrapper}>
          <Text text="Events" fontsize="2rem" />

          <div>
            <p className={eventDate}>
              {day}-{month}-{year}
            </p>
          </div>

          <div className={events}>
            <p className={eventName}>Some event</p>
            <div className={eventButton}>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>

          <div className={inputForm}>
            <Text text="Add event" fontsize="1.8rem" />
            <input
              className={input}
              onChange={updateField}
              name="title"
              placeholder="Add event..."
            />
          </div>

          <div className={submit}>
            <Button text="Add" type="submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

ModalEvent.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired
};

export default ModalEvent;
