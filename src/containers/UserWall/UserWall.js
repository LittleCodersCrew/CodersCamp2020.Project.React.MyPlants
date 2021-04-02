import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';

import SmallButton from '../../components/SmallButton';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Star from '../../assets/icons/Star.png';

import { addNote } from './UserWall.module.scss';

const UserWall = ({ isMyProfile, isFavourite }) => {
  const [userName, setUserName] = useState('');
  const [userLogin, setUserLogin] = useState('');
  const { token } = useToken();

  useEffect(() => {
    if (token) {
      const userId = JSON.parse(atob(token.split('.')[1])).id;
      fetch(`${Database.URL}/user/${userId}`, { headers: { Authorization: `Bearer ${token}` } }, {})
        .then((res) => res.json())
        .then((json) => {
          setUserName(json.name);
          setUserLogin(json.login);
        });
    }
  });

  if (isMyProfile) {
    return (
      <div>
        <Text text={userLogin} fontsize="2em" />
        <Text text={userName} fontsize="1.5em" />
        <div>
          <SmallButton text="Edit profile" fontsize="1.5em" />
        </div>
        <div className={addNote}>
          <Input height="5em" text="Add note..." />
          <Button type="submit" text="Save" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Text text={userLogin} fontsize="2em" />
      <Text text={userName} fontsize="1.5em" />
      <div>
        <img src={Star} alt="star" width="20px" height="20px" />
        <SmallButton text={isFavourite ? 'Delete from favourites' : 'Add to favourites'} fontsize="1.5em" />
      </div>
    </div>
  );
};

UserWall.propTypes = {
  isMyProfile: PropTypes.bool,
  isFavourite: PropTypes.bool
};

UserWall.defaultProps = {
  isMyProfile: false,
  isFavourite: false
};

export default UserWall;
