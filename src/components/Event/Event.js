import React from 'react';
import PropTypes from 'prop-types';
import { name, wrapper, buttons, button } from './Event.module.scss';

const Event = ({ event }) => (
  <div className={wrapper}>
    <p className={name}>{event}</p>
    <div className={buttons}>
      <button className={button} type="submit">
        Edit
      </button>
      <button className={button} type="submit">
        Delete
      </button>
    </div>
  </div>
);

Event.propTypes = { event: PropTypes.string.isRequired };

export default Event;
