/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useToken from '../../hooks/useToken/useToken';
import Database from '../../database';

import SmallButton from '../../components/SmallButton';
import Text from '../../components/Text';
import Note from '../../components/Note';
import PlantProfile from '../../components/PlantProfile';
import UserProfile from '../../components/UserProfile';
import UserWall from '../UserWall';

import profileleaf from '../../assets/illustrations/plant-leaf.png';

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
  const [favourite, setFavourite] = useState({ name: '' });

  useEffect(() => {
    fetch(`${Database.URL}/user/${id}/notes`, { headers: { Authorization: `Bearer ${token}` } }, {})
      .then((res) => res.json())
      .then((json) => {
        setNotes(json);
      });
  }, [id, token]);

  const showNote = (n) => (
    <Note
      noteTitle={n.title}
      noteText={n.text}
      notePlant={n.plant}
      notePicture={n.image}
      noteDate={n.timestamp.substr(0, 10)}
      nid={n.id}
    />
  );

  useEffect(() => {
    fetch(`${Database.URL}/user/${id}/favourites`, { headers: { Authorization: `Bearer ${token}` } }, {})
      .then((res) => res.json())
      .then((json) => {
        setFavourites(json);
      });
  }, [id, token]);

  const showFavourite = (f) => (
    <UserProfile name={f.name} />
  );

  const myProfile = (userId) => (userId === myId);
  return (
    <div className={mainContainer}>
      <header className={header}>
        <UserWall isMyProfile={myProfile(id)} isFavourite={false} />
      </header>
      <div className={journal}>
        <Text text="Login's journal" fontsize="1.5em" />
        <div className={notesStyle}>
          {/* {(notes.length >= 1) ? notes.map((n) => showNote(n)).reverse() : <Text text="Journal is empty :(" fontsize="1.4em" />} */}
        </div>
      </div>
      <div className={garden}>
        <Text text="Login's garden" fontsize="1.5em" />
        <div className={plants}>
          <PlantProfile name="Name" image={profileleaf} />
          <PlantProfile name="Name" image={profileleaf} />
          <PlantProfile name="Name" image={profileleaf} />
          <PlantProfile name="Name" image={profileleaf} />
          <PlantProfile name="Name" image={profileleaf} />
          <SmallButton text="+ 12 more" fontsize="1.5em" />
        </div>
      </div>
      <div className={friends}>
        <Text text="Login's favorite users" fontsize="1.5em" />
        <div className={users}>
          {/* {(favourites.length >= 1) ? favourites.map((f) => showFavourite(f)) : <Text text="No favourite users yet" fontsize="1em" />} */}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
