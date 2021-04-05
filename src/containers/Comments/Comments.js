import React from 'react';
import PropTypes from 'prop-types';
import classes from './comments.module.scss';
import Comment from '../../components/Comment';
import useToken from '../../hooks/useToken/useToken';
import Database from '../../database';

const handleLike = (isLiked, token, plantId, comment, currentUserId) => {
  if (isLiked) {
    const likeId = comment.likes.find((like) => like.user === currentUserId)._id;
    fetch(`${Database.URL}/plant/${plantId}/comments/${comment._id}/likes/${likeId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((json) => json.login);
  } else {
    fetch(`${Database.URL}/plant/${plantId}/comments/${comment._id}/likes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: { user: currentUserId }
    }).then((res) => res.json())
      .then((json) => json.login);
  }
};

const Comments = ({ comments, plantId }) => {
  const { token } = useToken();
  let isLiked;
  let currentUserId = '';

  if (token) {
    currentUserId = JSON.parse(atob(token.split('.')[1])).id;

    isLiked = comments.find(
      (comment) => comment.likes.find(
        (like) => like.user === currentUserId
      )
    );
  }

  if (comments.length === 0 || comments[0] === '') {
    return <p>No comments for the plant</p>;
  }

  return (
    <div className={classes.wrapper}>
      <p className={classes.header}>Comments</p>
      {token
        ? <p className={classes.unlogged}>Login to leave your comment</p>
        : <p>x</p>}
      {comments.map((comment) => (
        <Comment
          key={comment._id}
          username={comment.user}
          dateTime={comment.timestamp}
          content={comment.text}
          likesCount={comment.likes.length}
          likeHandler={token
            ? () => handleLike(isLiked, token, plantId, comment, currentUserId) : null}
          isLiked={isLiked}
        />
      ))}
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
