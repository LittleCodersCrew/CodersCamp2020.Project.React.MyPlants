import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import useToken from '../../hooks/useToken/useToken';
import { noteContainer, mainText, signText, sign, buttons } from './Note.module.scss';
import SmallButton from '../SmallButton';

const Buttons = ({ myProfile }) => {
  if (myProfile) {
    return (
      <div className={buttons}>
        <SmallButton text="Delete" fontsize="0.7rem" />
        <SmallButton text="Edit" fontsize="0.7rem" />
      </div>
    );
  }
  return (
    <div />
  );
};

const Note = ({ noteText, noteDate }) => {
  const { id } = useParams();
  const { token } = useToken();
  const myId = JSON.parse(atob(token.split('.')[1])).id;

  const isMyProfile = (userId) => (userId === myId);

  return (
    <div className={noteContainer}>
      <p className={mainText}>{noteText}</p>
      <div className={sign}>
        <p className={signText}>{noteDate}</p>
        <Buttons myProfile={isMyProfile(id)} />
      </div>
    </div>
  );
};

Buttons.propTypes = { myProfile: PropTypes.bool.isRequired };

Note.propTypes = {
  noteText: PropTypes.string.isRequired,
  noteDate: PropTypes.string.isRequired
};

export default Note;
