/* eslint-disable no-unreachable */
/* eslint-disable no-console */
import React from 'react';
import { useParams } from 'react-router-dom';
import useToken from '../../hooks/useToken/useToken';

import SmallButton from '../../components/SmallButton';
import Text from '../../components/Text';
import Note from '../../components/Note';
import PlantProfile from '../../components/PlantProfile';
import UserProfile from '../../components/UserProfile';
import UserWall from '../UserWall';

import profileleaf from '../../assets/illustrations/plant-leaf.png';

import { mainContainer, header, journal, garden, friends, plants, users, notes } from './UserPage.module.scss';

const notetext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const date = '01.04.2021.   20.09';

const UserPage = () => {
  const { id } = useParams();
  const { token } = useToken();
  const myId = JSON.parse(atob(token.split('.')[1])).id;

  const myProfile = (userId) => (userId === myId);
  console.log(id);
  return (
    <div className={mainContainer}>
      <header className={header}>
        <UserWall isMyProfile={myProfile(id)} isFavourite={false} />
      </header>
      <div className={journal}>
        <Text text="Login's journal" fontsize="1.5em" />
        <div className={notes}>
          <Note noteText={id} noteDate={date} />
          <Note noteText={notetext} noteDate={date} />
          <Note noteText={notetext} noteDate={date} />
          <Note noteText={notetext} noteDate={date} />
          <Note noteText={notetext} noteDate={date} />
          <SmallButton text="Load more" fontsize="1.5em" />
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
