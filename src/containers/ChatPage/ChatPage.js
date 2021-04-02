import React from 'react';
import classes from './ChatPage.module.scss';
import Message from '../../components/Message';

const ChatPage = () => (
  <div className={classes.wrapper}>
    <div className={classes.chat}>
      <p className={classes.header}>Tu będą kanały</p>
      <Message userName="Ania" dateTime="01.04.2021 16.37" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolorem quod incidunt. Voluptatum eum placeat modi sed, temporibus neque? Reprehenderit vitae unde tempora nesciunt? Architecto, ex praesentium! Facilis, reprehenderit cum." />
      <Message userName="Przemek" dateTime="01.04.2021 16.37" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolorem quod incidunt. Voluptatum eum placeat modi sed, temporibus neque? Reprehenderit vitae unde tempora nesciunt? Architecto, ex praesentium! Facilis, reprehenderit cum." />
      <p className={classes.unlogged}>Login to send a message</p>
    </div>
  </div>
);

export default ChatPage;
