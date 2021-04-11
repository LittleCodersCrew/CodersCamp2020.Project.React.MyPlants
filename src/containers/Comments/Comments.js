/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './comments.module.scss';
import Comment from '../../components/Comment';
import useToken from '../../hooks/useToken/useToken';
import Database from '../../database';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

const handleLike = (token, plantId, comment, currentUserId) => {
  if (comment.isLiked) {
    const likeId = comment.likes.find((like) => like.user === currentUserId)._id;
    fetch(`${Database.URL}/plant/${plantId}/comments/${comment._id}/likes/${likeId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  } else {
    fetch(`${Database.URL}/plant/${plantId}/comments/${comment._id}/likes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: currentUserId })
    });
  }
};

const Comments = ({ comments, plantId }) => {
  const [newComment, setNewComment] = useState({
    user: '',
    text: '',
    likes: []
  });
  const [clearSignal, setClearSignal] = useState(false);
  const { token } = useToken();
  let currentUserId = '';

  if (token) {
    currentUserId = JSON.parse(atob(token.split('.')[1])).id;

    comments.forEach((comment) => {
      if (comment.likes && comment.likes.find((like) => like.user === currentUserId)) {
        comment.isLiked = true;
      } else {
        comment.isLiked = false;
      }
    });
  }

  const updateComment = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
      user: currentUserId
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${Database.URL}/plant/${plantId}/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComment)
    });
    setClearSignal((prevSignal) => !prevSignal);
  };

  return (
    <div className={classes.wrapper}>
      <p className={classes.header}>Comments</p>
      {token
        ? (
          <div>
            <form id="newComment" method="POST" className={classes.form}>
              <TextArea text="Add your comment..." name="text" id="newComment" onChange={updateComment} clearSignal={clearSignal} />
              <div>
                <Button text="Send" type="submit" onClick={onSubmit} />
              </div>
            </form>
          </div>
        )
        : <p className={classes.unlogged}>Login to leave your comment</p>}
      {(comments.length === 0)
        ? ''
        : comments.map((comment) => {
          const id = comment._id === undefined ? Math.random() : comment._id;
          return (
            <Comment
              key={id}
              userId={comment.user}
              dateTime={comment.timestamp}
              content={comment.text}
              likesCount={comment.likes.length}
              likeHandler={token
                ? () => handleLike(token, plantId, comment, currentUserId) : null}
              isLiked={comment.isLiked}
              token={token}
            />
          );
        })}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  plantId: PropTypes.string.isRequired
};

export default Comments;
