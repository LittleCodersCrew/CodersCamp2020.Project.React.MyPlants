/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable no-console */
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

// const notetext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ';
// const date = '01.04.2021.   20.09';
// const roslinka = 'roslinka';
// const notepicture = 'https://2.allegroimg.com/s512/038ef0/d97a9b0745d99671f69f4316ce72/Pilea-peperomioides-roslina-pieniazek';

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
    timestamp: ''
  });

  useEffect(() => {
    fetch(`${Database.URL}/user/${id}/notes`, { headers: { Authorization: `Bearer ${token}` } }, {})
      .then((res) => res.json())
      .then((json) => {
        setNotes(json);
      });
  }, []);

  const showNote = (n) => (
    <Note
      noteTitle={n.title}
      noteText={n.text}
      notePlant={n.plant}
      notePicture={n.image}
      noteDate={n.timestamp.substr(0, 10)}
    />
  );

  console.log(notes);
  console.log('Fetch data', notes);

  const myProfile = (userId) => (userId === myId);
  console.log(id);
  return (
    <div className={mainContainer}>
      <header className={header}>
        <UserWall isMyProfile={myProfile(id)} isFavourite={false} />
      </header>
      <div className={journal}>
        <Text text="Login's journal" fontsize="1.5em" />
        <div className={notesStyle}>
          {notes.map((n) => showNote(n)).reverse()}
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
          <UserProfile name="User" />
          <UserProfile name="User" />
          <SmallButton text="+ 17 more" fontsize="1.5em" />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
