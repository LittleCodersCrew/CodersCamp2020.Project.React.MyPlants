/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';
import { noteContainer, mainText, signText, sign, buttons } from './Note.module.scss';
import SmallButton from '../SmallButton';

const Buttons = ({ myProfile, getNoteId }) => {
  const { id } = useParams();
  const { token } = useToken();
  const myId = JSON.parse(atob(token.split('.')[1])).id;

  const handleClick = () => fetch(`${Database.URL}/user/${myId}/notes/${getNoteId}`, {
    method: 'DELETE',
    headers:
        {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
  }, {})
    .then((data) => {
      if (data.status === 200) {
        window.location.reload();
      }
      return data.json();
    });

  if (myProfile) {
    return (
      <div className={buttons}>
        <SmallButton type="button" text="Delete" fontsize="0.7rem" onClick={handleClick} />
        <SmallButton type="button" text="Edit" fontsize="0.7rem" onClick={null} />
      </div>
    );
  }
  return (
    <div />
  );
};

const Note = ({ noteText, noteTitle, noteDate, notePlant, notePicture, noteId }) => {
  const { id } = useParams();
  const { token } = useToken();
  const myId = JSON.parse(atob(token.split('.')[1])).id;

  const isMyProfile = (userId) => (userId === myId);
  const ExistingPic = () => {
    if (notePicture) {
      return <img src={notePicture} alt={notePlant} height="200px" width="200px" />;
    }
    return <p />;
  };

  const getNoteId = (n) => n;

  return (
    <div className={noteContainer}>
      <p className={mainText}>{noteTitle}</p>
      <p className={mainText}>{noteText}</p>
      <p className={mainText}>
        `Plant: `
        {notePlant}
      </p>
      <ExistingPic />
      <div className={sign}>
        <p className={signText}>{noteDate}</p>
        <Buttons myProfile={isMyProfile(id)} getNoteId={noteId} />
      </div>
    </div>
  );
};

Buttons.propTypes = {
  myProfile: PropTypes.bool.isRequired,
  getNoteId: PropTypes.number.isRequired
};

Note.propTypes = {
  noteText: PropTypes.string.isRequired,
  noteDate: PropTypes.string.isRequired,
  notePlant: PropTypes.string.isRequired,
  noteTitle: PropTypes.string.isRequired,
  notePicture: PropTypes.string,
  noteId: PropTypes.number.isRequired
};

Note.defaultProps = { notePicture: '' };

export default Note;
