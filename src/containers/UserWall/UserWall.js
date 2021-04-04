/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';

import SmallButton from '../../components/SmallButton';
import Text from '../../components/Text';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import Star from '../../assets/icons/Star.png';
import GreenStar from '../../assets/icons/GreenStar.png';

import {
  addNote,
  title,
  tick,
  save,
  notes,
  text,
  additional,
  adding
} from './UserWall.module.scss';

const UserWall = ({ isMyProfile, isFavourite }) => {
  const [userName, setUserName] = useState('');
  const [userLogin, setUserLogin] = useState('');
  const [note, setNote] = useState({
    title: '',
    text: '',
    plant: '',
    private: false
  });
  const { id } = useParams();
  const { token } = useToken();

  useEffect(() => {
    if (token) {
      fetch(`${Database.URL}/user/${id}`, { headers: { Authorization: `Bearer ${token}` } }, {})
        .then((res) => res.json())
        .then((json) => {
          setUserName(json.name);
          setUserLogin(json.login);
        });
    }
  });

  const { register, handleSubmit, errors } = useForm();

  const sendNote = (n) => fetch(`${Database.URL}/user/${id}/notes`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(n)
  }).then((data) => {
    if (data.status === 200) {
      window.location.reload();
    }
    return data.json();
  });

  const onSubmit = () => {
    sendNote(note);
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  if (isMyProfile) {
    return (
      <div>
        <Text text={userLogin} fontsize="2em" />
        <Text text={userName} fontsize="1.5em" />
        <div>
          <SmallButton text="Edit profile" fontsize="1.5em" />
        </div>
        <div>
          <form className={addNote} id="newNote" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <Text className={text} text="Add new note" fontsize="1.5em" />
            <div className={title}>
              <TextArea
                text="Add title.."
                name="title"
                height="3em"
                value={note.title}
                onChange={handleChange}
                ref={register({ required: 'Title is required' })}
              />
            </div>
            <div className={notes}>
              <TextArea
                text="Add note..."
                name="text"
                id="newNote"
                height="10em"
                value={note.name}
                onChange={handleChange}
                ref={register({ required: 'Text of note is required' })}
              />
            </div>
            <div className={tick}>
              <input type="checkbox" id="private" name="private" value="true" />
              <label htmlFor="private"> Private? </label>
            </div>
            <div className={additional}>
              <TextArea
                className={adding}
                text="Add link to photo..."
                name="text"
                height="3em"
                value={note.text}
                onChange={handleChange}
              />
              <TextArea
                text="Which plant is it about?"
                name="plant"
                height="3em"
                value={note.plant}
                onChange={handleChange}
                ref={register({ required: 'Plant name is required' })}
              />
            </div>
            <div className={save}>
              <Button type="submit" text="Save" />
            </div>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Text text={userLogin} fontsize="2em" />
      <Text text={userName} fontsize="1.5em" />
      <div>
        <img src={isFavourite ? GreenStar : Star} alt="star" width="20px" height="20px" />
        <SmallButton
          text={isFavourite ? 'Delete from favourites' : 'Add to favourites'}
          fontsize="1.5em"
        />
      </div>
    </div>
  );
};

UserWall.propTypes = {
  isMyProfile: PropTypes.bool,
  isFavourite: PropTypes.bool
};

UserWall.defaultProps = {
  isMyProfile: false,
  isFavourite: false
};

export default UserWall;
