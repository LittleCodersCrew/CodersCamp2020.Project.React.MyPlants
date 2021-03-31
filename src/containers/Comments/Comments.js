import React from 'react';
import classes from './comments.module.scss';
import Comment from '../../components/Comment';

const Comments = () => (
  <div className={classes.wrapper}>
    <p className={classes.header}>Comments</p>
    <p className={classes.unlogged}>Login to leave your comment</p>
    <Comment username="Weronika" dateTime="20.03.2021 12.01" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolorem quod incidunt. Voluptatum eum placeat modi sed, temporibus neque? Reprehenderit vitae unde tempora nesciunt? Architecto, ex praesentium! Facilis, reprehenderit cum." likesCount="27" likeHandler={() => console.log('Hello')} isLiked />
    <Comment username="Tom" dateTime="20.03.2021 12.01" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolorem quod incidunt. Voluptatum eum placeat modi sed, temporibus neque? Reprehenderit vitae unde tempora nesciunt? Architecto, ex praesentium! Facilis, reprehenderit cum." likesCount="18" likeHandler={() => console.log('Hello')} />
  </div>
);

export default Comments;
