import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './comment.module.scss';
import Avatar from '../../assets/icons/3 User.png';
import Star from '../../assets/icons/Star.png';

const Comment = ({ username, dateTime, content, likesCount, likeHandler, isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  const likeLocalHandler = () => {
    likeHandler();
    setLiked(!liked);
  };

  return (
    <div className={classes.comment}>
      <div className={classes.user}>
        <img src={Avatar} alt="User avatar" />
        <p className={classes.userInfo}>
          <span>{username}</span>
          <span>{dateTime}</span>
        </p>
      </div>
      <p className={classes.content}>{content}</p>
      <div className={classes.footer}>
        <p className={classes.likes}>
          <img className={classes.star} src={Star} alt="Star symbol" />
          <span>
            {likesCount}
            {' '}
            {likesCount === 1 ? 'like' : 'likes'}
          </span>
        </p>
        {
          likeHandler === null ? '' : (
            <button
              className={classes.btn}
              onClick={likeLocalHandler}
            >
              {liked ? 'Don\'t like it' : 'Like it!'}
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Comment;

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  likeHandler: PropTypes.func,
  isLiked: PropTypes.bool
};

Comment.defaultProps = {
  likeHandler: null,
  isLiked: false
};
