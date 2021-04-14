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
  const [userLogin, setUserLogin] = useState('');
  const [notes, setNotes] = useState([]);
  const [notesPublic, setNotesPublic] = useState([]);
  const [note, setNote] = useState({
    title: '',
    text: '',
    plant: '',
    image: '',
    timestamp: '',
    nid: '',
    private: ''
  });
  const [notePublic, setNotePublic] = useState({
    title: '',
    text: '',
    plant: '',
    image: '',
    timestamp: '',
    nid: '',
    private: ''
  });
  const [favourites, setFavourites] = useState([]);
  const [favourite, setFavourite] = useState({ user: '' });
  const [myPlants, setMyPlants] = useState([]);
  const [myPlant, setMyPlant] = useState({ name: '' });
  const [myFavourites, setMyFavourites] = useState([]);
  const [myFavourite, setMyFavourite] = useState({ user: '' });
  const [getUsersName, setGetUsersName] = useState('');

  useEffect(() => {
    if (token) {
      fetch(`${Database.URL}/user/${id}`, { headers: { Authorization: `Bearer ${token}` } }, {})
        .then((res) => res.json())
        .then((json) => {
          setUserLogin(json.login);
        });
    }
  });

  useEffect(() => {
    async function fetchNotes() {
      let notesFetched = [];

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
          notesFetched = json;
        });
      async function fetchPlantName(pid) {
        return fetch(`${Database.URL}/user/${id}/plants/${pid}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json())
          .then((json) => json.name);
      }
      for (const n of notesFetched) {
        const plantName = await fetchPlantName(n.plant);
        n.plant = plantName;
      }
      setNotes(notesFetched);
    }
    fetchNotes();
  }, [id, token, notes, myId]);

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

  useEffect(() => {
    fetch(`${Database.URL}/user/${id}/plants`,
      {
        headers:
    {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
      }, [])
      .then((res) => res.json())
      .then((json) => {
        setMyPlants(json);
      });
  }, [id, token]);

  useEffect(() => {
    async function fetchFavourites() {
      let favouritesFetched = [];

      await fetch(`${Database.URL}/user/${id}/favourites`,
        {
          headers:
        {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
        }, [])
        .then((res) => res.json())
        .then((json) => {
          favouritesFetched = json;
        });

      async function fetchUserName(uid) {
        return fetch(`${Database.URL}/user/${uid}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json())
          .then((json) => json.login);
      }
      for (const f of favouritesFetched) {
        const userName = await fetchUserName(f.user);
        f.username = userName;
      }
      setFavourites(favouritesFetched);
    }
    fetchFavourites();
  }, [id, token]);

  const getPublicNotes = () => {
    const publicNote = notes.sort((noteToSort) => noteToSort.private === 'false');
    setNotesPublic(...publicNote);
  };

  const showFavourite = (f) => (
    <UserProfile usersId={f.user} usersName={f.username} />
  );

  const showMyPlants = (p) => (
    <PlantProfile plantName={p.name} plantId={p.plant} plantPhoto={p.image} />
  );

  const myProfile = (userId) => (userId === myId);

  const isFavourite = (userId) => (myFavourites.find((f) => f.user === userId));
  const journalText = `${userLogin}'s journal`;
  const gardenText = `${userLogin}'s garden`;
  const favText = `${userLogin}'s favourite users`;

  return (
    <div className={mainContainer}>
      <header className={header}>
        <UserWall isMyProfile={myProfile(id)} isFavourite={isFavourite(id)} />
      </header>
      <div className={journal}>
        <Text text={journalText} fontsize="1.5em" />
        <div className={notesStyle}>
          {(notes.length >= 1) ? notes.map((n) => showNote(n)).reverse() : <Text text="Journal is empty :(" fontsize="1.4em" />}
        </div>
      </div>
      <div className={garden}>
        <Text text={gardenText} fontsize="1.5em" />
        <div className={plants}>
          {(myPlants.length >= 1) ? myPlants.map((p) => showMyPlants(p)) : <Text text="Garden is empty" fontsize="1em" />}
        </div>
      </div>
      <div className={friends}>
        <Text text={favText} fontsize="1.5em" />
        <div className={users}>
          {(favourites.length >= 1) ? favourites.map((f) => showFavourite(f)) : <Text text="No favourite users yet" fontsize="1em" />}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
