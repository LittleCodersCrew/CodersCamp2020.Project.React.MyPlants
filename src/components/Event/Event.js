import React from 'react';
import PropTypes from 'prop-types';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';
import styles from './Event.module.scss';

const Event = ({ title, description, id }) => {
  const { token } = useToken();
  const userId = JSON.parse(atob(token.split('.')[1])).id;

  const toDelete = async (e) => {
    e.preventDefault();
    fetch(`${Database.URL}/calendar/user/${userId}/event/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>{title}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.button}>
        <button className={styles.buttonDelete} type="submit" onClick={toDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

Event.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Event;
