import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SmallButton from '../SmallButton';

import { user, userImage } from './UserProfile.module.scss';

import profile from '../../assets/icons/Profile.png';

const UserProfile = ({ usersId, usersName }) => (
  <div className={user}>
    <Link className={user} to={`/user/${usersId}`}>
      <img className={userImage} src={profile} alt="Profile" height="80rem" width="80rem" />
      <SmallButton text={usersName} fontsize="1.5em" />
    </Link>
  </div>
);

UserProfile.propTypes = {
  usersId: PropTypes.number.isRequired,
  usersName: PropTypes.string.isRequired
};

export default UserProfile;
