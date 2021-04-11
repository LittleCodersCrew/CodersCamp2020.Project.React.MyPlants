import React from 'react';
import PropTypes from 'prop-types';
import { message, user, userInfo, dateTimeStyle, contentStyle } from './Message.module.scss';
import Avatar from '../../assets/icons/3 User.png';

const Message = ({ userName, dateTime, content }) => (
  <div className={message}>
    <div className={user}>
      <img src={Avatar} alt="User avatar" />
      <p className={userInfo}>
        <span>{userName}</span>
        <span className={dateTimeStyle}>{dateTime}</span>
      </p>
    </div>
    <p className={contentStyle}>{content}</p>
  </div>
);

export default Message;

Message.propTypes = {
  userName: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
