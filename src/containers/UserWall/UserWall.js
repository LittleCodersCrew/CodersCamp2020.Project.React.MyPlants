/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
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
import Select from '../../components/Select';
import ModalEditProfile from '../../components/ModalEditProfile';

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
  adding,
  wrapper,
  select
} from './UserWall.module.scss';

const UserWall = ({ isMyProfile, isFavourite }) => {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const [userName, setUserName] = useState('');
  const [userLogin, setUserLogin] = useState('');
  const [note, setNote] = useState({
    title: '',
    text: '',
    plant: '',
    image: '',
    private: false
  });
  const [myFavourites, setMyFavourites] = useState([]);
  const [myFavourite, setMyFavourite] = useState({ user: '' });
  const [myPlants, setMyPlants] = useState([]);
  const [myPlantsName, setMyPlantsName] = useState('');
  const [myPlantsId, setMyPlantsId] = useState('');
  const [myPlantsBaseId, setMyPlantsBaseId] = useState('');
  const [chosenPlant, setChosenPlant] = useState('');

  const { id } = useParams();
  const { token } = useToken();
  const myId = JSON.parse(atob(token.split('.')[1])).id;

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

  useEffect(() => {
    async function fetchMyPlants() {
      let myPlants = [];

      await fetch(`${Database.URL}/user/${myId}/plants`,
        {
          headers:
        {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
        }, {})
        .then((res) => res.json())
        .then((json) => {
          myPlants = json;
        });
      setMyPlants(myPlants);
    }
    fetchMyPlants();
  }, []);

  const myPlantsNames = myPlants.map((plant) => plant.name);

  // Adding notes

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
      console.log('note added');
    }
    return data.json();
  });

  const onSubmit = () => {
    note.plant = chosenPlant._id;
    sendNote(note);
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (title, value) => {
    const choosenPlant1 = myPlants.filter((plant) => `${plant.name}` === value);
    setChosenPlant(...choosenPlant1);
    console.log(chosenPlant._id);
  };

  //  Favourites

  useEffect(() => {
    fetch(`${Database.URL}/user/${myId}/favourites`,
      {
        headers:
    {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
      }, {})
      .then((res) => res.json())
      .then((json) => {
        setMyFavourites(json);
      });
  }, [id, token]);

  const handleFavourite = () => {
    if (isFavourite) {
      const favouriteId = myFavourites.find((favourite) => favourite.user === id)._id;
      fetch(`${Database.URL}/user/${myId}/favourites/${favouriteId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }).then((data) => {
        if (data.status === 200) {
          window.location.reload();
        }
        return data.json();
      });
    } else {
      fetch(`${Database.URL}/user/${myId}/favourites`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: id })
      }).then((data) => {
        if (data.status === 200) {
          window.location.reload();
        }
        return data.json();
      });
    }
  };

  if (isMyProfile) {
    return (
      <div className={wrapper}>
        <Text text={userLogin} fontsize="2em" />
        <Text text={userName} fontsize="1.5em" />
        <div>
          <SmallButton type="button" text="Edit profile" fontsize="1.5em" onClick={openModal} />
        </div>
        <ModalEditProfile closeModal={closeModal} show={show} />
        <div>
          <form className={addNote} id="newNote" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <Text className={text} text="Add new note" fontsize="1.5em" />
            <div className={title}>
              <TextArea
                text="Add title..."
                name="title"
                height="3.5em"
                value={note.title}
                onChange={handleChange}
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
              />
            </div>
            <div className={tick}>
              <input type="checkbox" id="private" name="private" value="true" onChange={(e) => setNote({ ...note, private: e.target.checked })} />
              <label htmlFor="private"> Private? </label>
            </div>
            <div className={additional}>
              <TextArea
                className={adding}
                text="Add link to photo..."
                name="image"
                height="3.5em"
                value={note.image}
                onChange={handleChange}
              />
              <Select
                className={select}
                title="Which plant?"
                values={myPlantsNames}
                cb={handleSelectChange}
                value={note.plant}
                height="3.5em"
                fontSize="0.9em"
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
          type="button"
          onClick={handleFavourite}
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
