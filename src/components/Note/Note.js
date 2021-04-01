import React from 'react';
import PropTypes from 'prop-types';
import { noteContainer, mainText, signText } from './Note.module.scss';

const Note = ({ noteText, noteDate }) => (
  <div className={noteContainer}>
    <p className={mainText}>{noteText}</p>
    <p className={signText}>{noteDate}</p>
  </div>
);

Note.propTypes = {
  noteText: PropTypes.string.isRequired,
  noteDate: PropTypes.string.isRequired
};

export default Note;
