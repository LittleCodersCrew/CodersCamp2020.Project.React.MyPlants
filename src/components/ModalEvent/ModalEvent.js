/* eslint-disable no-confusing-arrow */
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
import Event from '../Event';
import useToken from '../../hooks/useToken/useToken';
import styles, { hide, overlay, modal, error } from './ModalEvent.module.scss';
import closeSquare from '../../assets/icons/CloseSquare.png';

const ModalEvent = (props) => {
  const { show, closeModal, date } = props;
  const { token } = useToken();

  const { register, errors, handleSubmit } = useForm();

  const [toMuchEvents, setToMuchEvents] = useState('');
  const [disabled, setDisabled] = useState('');

  const [eventData, setEventDate] = useState('');
  useEffect(() => setEventDate(date), [date]);

  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: ''
  });

  const [eventsForDay, setEventsForDay] = useState([]);

  const userId = JSON.parse(atob(token.split('.')[1])).id;

  const to = () => {
    setDisabled(`${styles.disabled}`);
    setToMuchEvents('You can have three events for a one day.');
  };

  const not = () => {
    setDisabled('');
    setToMuchEvents('');
  };

  useEffect(() => {
    async function fetchEvents() {
      let userEvents = [];

      await fetch(`${Database.URL}/calendar/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => res.json())
        .then((json) => {
          userEvents = json.calendar.events;
        });

      const lookingData = date.substring(0, 10);

      userEvents = userEvents.filter((e) => e.date.substring(0, 10) === lookingData);
      setEventsForDay(userEvents);
    }

    fetchEvents();

    const amount = () => (eventsForDay.length === 3 ? to() : not());

    amount();
  }, [eventsForDay, token, userId, date]);

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
        document.getElementById('input').value = '';
        document.getElementById('description').value = '';
      }

      data.json();
      setEvent({
        ...event,
        description: ''
      });
    });

  const onSubmit = () => (eventsForDay.length === 3 ? null : sendEvent(event));

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
        <button className={styles.button} onClick={closeModal}>
          <img src={closeSquare} alt="close" />
        </button>

        <div className={styles.wrapper}>
          <Text text="Events" fontsize="2rem" />

          <div>
            <p className={styles.eventDate}>
              {day}-{month}-{year}
            </p>
          </div>

          <div className={styles.events}>
            <div>
              {eventsForDay.length === 0 ? (
                <p style={{ fontSize: '1.5rem' }}>No events for this day...</p>
              ) : (
                eventsForDay.map((e) => (
                  // eslint-disable-next-line no-underscore-dangle
                  <Event key={e._id} title={e.title} description={e.description} id={e._id} />
                ))
              )}
            </div>
          </div>

          <div className={styles.inputForm}>
            <Text text="Add event" fontsize="1.8rem" />
            <p className={styles.amount}>{toMuchEvents}</p>
            <div className={disabled}>
              <input
                id="input"
                className={styles.input}
                onChange={updateField}
                name="title"
                placeholder="Add name of your event."
                ref={register({
                  required: 'Name of the event is required.',
                  maxLength: {
                    value: 20,
                    message: 'Name of the event is too long.'
                  }
                })}
              />
              {errors.title && <p className={error}>{errors.title.message}</p>}
            </div>
            <div className={disabled}>
              <textarea
                className={`${styles.textarea} ${disabled}`}
                placeholder="Add description for your event if you like."
                id="description"
                name="description"
                type="text"
                onChange={updateField}
                ref={register({
                  maxLength: {
                    value: 100,
                    message: 'Description is too long.'
                  }
                })}
              />
              {errors.description && <p className={error}>{errors.description.message}</p>}
            </div>
          </div>

          <div className={disabled}>
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
