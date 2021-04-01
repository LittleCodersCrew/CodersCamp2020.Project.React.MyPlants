import React from 'react';

import SmallButton from '../../components/SmallButton';
import Text from '../../components/Text';
import Note from '../../components/Note';
import PlantProfile from '../../components/PlantProfile';

import Star from '../../assets/icons/Star.png';
import profileleaf from '../../assets/illustrations/plant-leaf.png';

import { mainContainer, header, journal, garden, users } from './UserPage.module.scss';

const notetext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const date = '01.04.2021.   20.09';

const UserPage = () => (
  <div className={mainContainer}>
    <header className={header}>
      <Text text="Login" fontsize="2em" />
      <Text text="Name" fontsize="1.5em" />
      <div>
        <img src={Star} alt="star" width="20px" height="20px" />
        <SmallButton text="Add to favourites" fontsize="1.5em" />
      </div>
    </header>
    <div className={journal}>
      <Text text="Login's journal" fontsize="1.5em" />
      <Note noteText={notetext} noteDate={date} />
      <Note noteText={notetext} noteDate={date} />
      <Note noteText={notetext} noteDate={date} />
      <SmallButton text="Load more" fontsize="1.5em" />
    </div>
    <div className={garden}>
      <Text text="Login's garden" fontsize="1.5em" />
      <PlantProfile name="Name" image={profileleaf} />
    </div>
    <div className={users}>
      <Text text="Login's favorite users" fontsize="1.5em" />
    </div>
  </div>
);

export default UserPage;
