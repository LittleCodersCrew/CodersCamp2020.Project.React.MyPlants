import React from 'react';
import PropTypes from 'prop-types';

import SmallButton from '../../components/SmallButton';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Star from '../../assets/icons/Star.png';

import { addNote } from './UserWall.module.scss';

const UserWall = ({ isMyProfile, isFavourite }) => {
  if (isMyProfile) {
    return (
      <div>
        <Text text="Login" fontsize="2em" />
        <Text text="Name" fontsize="1.5em" />
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
      <Text text="Login" fontsize="2em" />
      <Text text="Name" fontsize="1.5em" />
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
