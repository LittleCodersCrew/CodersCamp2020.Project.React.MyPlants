import React from 'react';
import PropTypes from 'prop-types';
import Text from '../SmallButton';

import { user, userImage } from './UserProfile.module.scss';

import profile from '../../assets/icons/Profile.png';

const UserProfile = ({ usersId, usersName }) => {
  const link = `user/${usersId}`;
  return (
    <div className={user}>
      <a className={user} href={link}>
        <img className={userImage} src={profile} alt="Profile" height="80rem" width="80rem" />
        <Text text={usersName} fontsize="1.5em" />
      </a>
    </div>
  );
};

UserProfile.propTypes = {
  usersId: PropTypes.string.isRequired,
  usersName: PropTypes.string.isRequired
};

export default UserProfile;
