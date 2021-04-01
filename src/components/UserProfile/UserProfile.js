import React from 'react';
import PropTypes from 'prop-types';
import SmallButton from '../SmallButton';

import { user, userImage } from './UserProfile.module.scss';

import profile from '../../assets/icons/Profile.png';

const UserProfile = ({ name }) => (
  <div className={user}>
    <img className={userImage} src={profile} alt="Leaf" height="80rem" width="80rem" />
    <SmallButton text={name} fontsize="1.5em" />
  </div>
);

UserProfile.propTypes = { name: PropTypes.string.isRequired };

export default UserProfile;
