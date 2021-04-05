/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';
import { noteContainer, mainText, signText, sign, buttons } from './Note.module.scss';
import SmallButton from '../SmallButton';

const Buttons = ({ myProfile }) => {
  const { id } = useParams();
  const { nid } = useParams();
  const { token } = useToken();
  // const myId = JSON.parse(atob(token.split('.')[1])).id;
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    title: '',
    text: '',
    plant: '',
    image: '',
    timestamp: ''
  });
  notes.map((n) => note._id);

  useEffect(() => {
    fetch(`${Database.URL}/user/${id}/notes`, { headers: { Authorization: `Bearer ${token}` } }, {})
      .then((res) => res.json())
      .then((json) => {
        setNotes(json);
      });
  }, [id, token]);

  const handleClick = (n) => {
    const requestOptions = { method: 'DELETE' };
    fetch(`${Database.URL}/user/${id}/notes/${nid}`, requestOptions, { headers: { Authorization: `Bearer ${token}` } }, {})
      .then((response) => response.json())
      .then((result) => { console.log(note._id); });
  };

  if (myProfile) {
    return (
      <div className={buttons}>
        <SmallButton text="Delete" fontsize="0.7rem" onClick={handleClick(note.id)} />
        <SmallButton text="Edit" fontsize="0.7rem" />
      </div>
    );
  }
  return (
    <div />
  );
};

const Note = ({ noteText, noteTitle, noteDate, notePlant, notePicture }) => {
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
        <Buttons myProfile={isMyProfile(id)} />
      </div>
    </div>
  );
};

Buttons.propTypes = { myProfile: PropTypes.bool.isRequired };

Note.propTypes = {
  noteText: PropTypes.string.isRequired,
  noteDate: PropTypes.string.isRequired,
  notePlant: PropTypes.string.isRequired,
  noteTitle: PropTypes.string.isRequired,
  notePicture: PropTypes.string
};

Note.defaultProps = { notePicture: '' };

export default Note;
