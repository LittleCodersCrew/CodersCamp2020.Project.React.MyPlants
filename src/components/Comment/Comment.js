import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './comment.module.scss';
import Avatar from '../../assets/icons/3 User.png';
import Star from '../../assets/icons/Star.png';
import Database from '../../database';

const Comment = ({ userId, dateTime, content, likesCount, likeHandler, isLiked, token }) => {
  const [liked, setLiked] = useState(isLiked);
  const [username, setUsername] = useState('');
  const [likesTempCount, setLikesTempCount] = useState(0);

  const likeLocalHandler = () => {
    likeHandler();
    setLiked(!liked);
    setLikesTempCount(liked ? likesTempCount - 1 : likesTempCount + 1);
  };

  useEffect(() => {
    if (token) {
      const fetchUserName = async (id) => {
        const name = await fetch(`${Database.URL}/user/${id}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json())
          .then((json) => json.login);
        setUsername(name || 'Anonymous');
      };
      fetchUserName(userId);
    } else {
      setUsername('Anonymous');
    }
  }, [userId, token]);

  return (
    <div className={classes.comment}>
      <div className={classes.user}>
        <img src={Avatar} alt="User avatar" />
        <p className={classes.userInfo}>
          <span>{username}</span>
          <span>{`${dateTime.split('T')[0]} ${dateTime.split('T')[1].split('.')[0]}`}</span>
        </p>
      </div>
      <p className={classes.content}>{content}</p>
      <div className={classes.footer}>
        <p className={classes.likes}>
          <img className={classes.star} src={Star} alt="Star symbol" />
          <span>
            {likesCount + likesTempCount}
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
  userId: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  likeHandler: PropTypes.func,
  isLiked: PropTypes.bool,
  token: PropTypes.string.isRequired
};

Comment.defaultProps = {
  likeHandler: null,
  isLiked: false
};
