/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Database from '../../database';
import Text from '../Text';
import Button from '../Button';
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
  eventButton,
  error
} from './ModalEvent.module.scss';
import closeSquare from '../../assets/icons/CloseSquare.png';

const ModalEvent = (props) => {
  const { show, closeModal, date } = props;
  const { token } = useToken();

  const { register, errors, handleSubmit } = useForm();

  const [eventData, setEventDate] = useState('');
  useEffect(() => setEventDate(date), [date]);

  const [event, setEvent] = useState({
    title: '',
    date: ''
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
      if (data.status === 200) {
        window.location.reload();
      }

      data.json();
    });

  const onSubmit = () => {
    sendEvent(event);
  };

  const updateField = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
      date: eventData
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
              ref={register({
                required: 'Name of the event is required.'
              })}
            />
            {errors.title && <p className={error}>{errors.title.message}</p>}
          </div>

          <div className={submit}>
            <Button text="Add" type="submit" onClick={handleSubmit(onSubmit)} />
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
