import React from 'react';
import PropTypes from 'prop-types';
import classes from './Message.module.scss';
import Avatar from '../../assets/icons/3 User.png';

const Message = ({ userName, dateTime, content }) => (
  <div className={classes.message}>
    <div className={classes.user}>
      <img src={Avatar} alt="User avatar" />
      <p className={classes.userInfo}>
        <span>{userName}</span>
        <span className={classes.dateTime}>{dateTime}</span>
      </p>
    </div>
    <p className={classes.content}>{content}</p>
  </div>
);

export default Message;

Message.propTypes = {
  userName: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
