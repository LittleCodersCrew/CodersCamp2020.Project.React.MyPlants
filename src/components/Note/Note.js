import React from 'react';
import PropTypes from 'prop-types';
import { noteContainer, mainText, signText, sign, buttons } from './Note.module.scss';
import SmallButton from '../SmallButton';

const Note = ({ noteText, noteDate }) => (
  <div className={noteContainer}>
    <p className={mainText}>{noteText}</p>
    <div className={sign}>
      <p className={signText}>{noteDate}</p>
      <div className={buttons}>
        <SmallButton text="Delete" fontsize="0.7rem" />
        <SmallButton text="Edit" fontsize="0.7rem" />
      </div>
    </div>

  </div>
);

Note.propTypes = {
  noteText: PropTypes.string.isRequired,
  noteDate: PropTypes.string.isRequired
};

export default Note;
