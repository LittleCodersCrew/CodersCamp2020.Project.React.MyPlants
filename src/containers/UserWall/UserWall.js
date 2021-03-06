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
  save,
  notes,
  text,
  additional,
  wrapper
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
  const [myPlants, setMyPlants] = useState([]);
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
      let myPlantsFetched = [];

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
          myPlantsFetched = json;
        });
      setMyPlants(myPlantsFetched);
    }
    fetchMyPlants();
  }, [myId, token]);

  const myPlantsNames = myPlants.map((plant) => plant.name);

  // Adding notes

  const { handleSubmit } = useForm();

  const sendNote = (n) => fetch(`${Database.URL}/user/${id}/notes`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(n)
  }).then((data) => data.json());

  const onSubmit = () => {
    note.plant = chosenPlant._id;
    sendNote(note);
    [...document.querySelectorAll('textarea')].map((textareaInput) => {
      textareaInput.value = '';
      return textareaInput;
    });
    [...document.querySelectorAll('select')].map((selectInput) => {
      selectInput.value = 'default';
      return selectInput;
    });
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (_title, value) => {
    const choosenPlant1 = myPlants.filter((plant) => `${plant.name}` === value);
    setChosenPlant(...choosenPlant1);
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
  }, [id, myId, token]);

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
            <div className={additional}>
              <TextArea
                text="Add link to photo..."
                name="image"
                height="3.5em"
                value={note.image}
                onChange={handleChange}
              />
              <Select
                title="Which plant?"
                values={myPlantsNames}
                cb={handleSelectChange}
                value={note.plant}
                height="3.7em"
                fontsize="0.9em"
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
