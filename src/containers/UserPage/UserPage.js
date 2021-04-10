/* eslint-disable no-unreachable */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useToken from '../../hooks/useToken/useToken';
import Database from '../../database';

import Text from '../../components/Text';
import Note from '../../components/Note';
import PlantProfile from '../../components/PlantProfile';
import UserProfile from '../../components/UserProfile';
import UserWall from '../UserWall';

import {
  mainContainer,
  header,
  journal,
  garden,
  friends,
  plants,
  users,
  notesStyle
} from './UserPage.module.scss';

const UserPage = () => {
  const { id } = useParams();
  const { token } = useToken();
  const myId = JSON.parse(atob(token.split('.')[1])).id;
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    title: '',
    text: '',
    plant: '',
    image: '',
    timestamp: '',
    nid: ''
  });
  const [favourites, setFavourites] = useState([]);
  const [favourite, setFavourite] = useState({ user: '' });
  const [myPlants, setMyPlants] = useState([]);
  const [myPlant, setMyPlant] = useState({ name: '' });
  const [myFavourites, setMyFavourites] = useState([]);
  const [myFavourite, setMyFavourite] = useState({ user: '' });
  // const [getUsersNames, setGetUsersNames] = useState([]);
  const [getUsersName, setGetUsersName] = useState('');

  useEffect(() => {
    async function fetchNotes() {
      let notes = [];

      await fetch(`${Database.URL}/user/${id}/notes`,
        {
          headers:
        {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
        }, {})
        .then((res) => res.json())
        .then((json) => {
          notes = json;
        });

      async function fetchPlantName(pid) {
        return fetch(`${Database.URL}/plant/${pid}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json())
          .then((json) => json.name);
      }
      for (const n of notes) {
        const plantName = await fetchPlantName(n.plant);
        n.plant = plantName;
      }
      setNotes(notes);
    }
    fetchNotes();
  }, [id, token]);

  const showNote = (n) => (
    <Note
      noteTitle={n.title}
      noteText={n.text}
      notePlant={n.plant}
      notePicture={n.image}
      noteDate={n.timestamp}
      noteId={n._id}
    />
  );

  useEffect(() => {
    fetch(`${Database.URL}/user/${id}/favourites`,
      {
        headers:
      {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
      }, {})
      .then((res) => res.json())
      .then((json) => {
        setFavourites(json);
      });
  }, [id, token]);

  useEffect(() => {
    fetch(`${Database.URL}/users/${id}/plants`,
      {
        headers:
    {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
      }, {})
      .then((res) => res.json())
      .then((json) => {
        setMyPlants(json);
      });
  }, []);

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

  const showFavourite = (f) => {
    const usersId = f.user;
    const giveUsersName = () => {
      fetch(`${Database.URL}/user/${usersId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then((res) => res.json())
        .then((json) => {
          setGetUsersName(json.login);
        });
    };
    console.log(getUsersName);
    return (<UserProfile usersId={f.user} usersName={f.user} />);
  };

  const showMyPlants = (p) => (
    <PlantProfile user={p.user} />
  );

  const myProfile = (userId) => (userId === myId);

  const isFavourite = (userId) => (myFavourites.find((f) => f.user === userId));

  return (
    <div className={mainContainer}>
      <header className={header}>
        <UserWall isMyProfile={myProfile(id)} isFavourite={isFavourite(id)} />
      </header>
      <div className={journal}>
        <Text text="Login's journal" fontsize="1.5em" />
        <div className={notesStyle}>
          {(notes.length >= 1) ? notes.map((n) => showNote(n)).reverse() : <Text text="Journal is empty :(" fontsize="1.4em" />}
        </div>
      </div>
      <div className={garden}>
        <Text text="Login's garden" fontsize="1.5em" />
        <div className={plants}>
          {(myPlants.length >= 1) ? myPlants.map((p) => showMyPlants(p)) : <Text text="Garden is empty" fontsize="1em" />}
        </div>
      </div>
      <div className={friends}>
        <Text text="Login's favorite users" fontsize="1.5em" />
        <div className={users}>
          {(favourites.length >= 1) ? favourites.map((f) => showFavourite(f)) : <Text text="No favourite users yet" fontsize="1em" />}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
