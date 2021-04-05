import React from 'react';
import PropTypes from 'prop-types';
import classes from './comments.module.scss';
import Comment from '../../components/Comment';
import useToken from '../../hooks/useToken/useToken';

const Comments = ({ comments }) => {
  const { token } = useToken();
  const currentUserId = JSON.parse(atob(token.split('.')[1])).id;
  console.log(currentUserId);

  if (comments.length === 0 || comments[0] === '') {
    return <p>No comments for the plant</p>;
  }

  const isLiked = comments.find(
    (comment) => comment.likes.find(
      (like) => like.user === currentUserId
    )
  );

  return (
    <div className={classes.wrapper}>
      <p className={classes.header}>Comments</p>
      <p className={classes.unlogged}>Login to leave your comment</p>
      {comments.map((comment) => (
        <Comment
          key={comment._id}
          username={comment.user}
          dateTime={comment.timestamp}
          content={comment.text}
          likesCount={comment.likes.length}
          likeHandler={isLiked}
          isLiked={isLiked}
        />
      ))}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

export default Comments;
