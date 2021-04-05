import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SmallButton from '../SmallButton';

import { user, userImage } from './UserProfile.module.scss';

import profile from '../../assets/icons/Profile.png';

const UserProfile = ({ name }) => (
  <div className={user}>
    <Link to={user / { name }}>
      <img className={userImage} src={profile} alt="Profile" height="80rem" width="80rem" />
      <SmallButton text={name} fontsize="1.5em" />
    </Link>
  </div>
);

UserProfile.propTypes = { name: PropTypes.string.isRequired };

export default UserProfile;
