/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Database from '../../database';
// import useToken from '../../hooks/useToken/useToken';
import { wrapper, chat, header, unlogged } from './ChatPage.module.scss';
import Message from '../../components/Message';
import Canals from '../../components/Canals';

const createMessage = (message) => {
  const data = [message.user, message.date.substring(0, 10), message.text];
  return (<Message userName={data[0]} dateTime={data[1]} content={data[2]} />);
};

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  // const { token } = useToken();

  useEffect(() => {
    fetch(`${Database.URL}/message/`)
      .then((res) => res.json())
      .then((json) => {
        setMessages(json);
      });
  });

  return (
    <div className={wrapper}>
      <div className={chat}>
        <div className={header}><Canals /></div>
        {messages.map((message) => createMessage(message))}
        <p className={unlogged}>Login to send a message</p>
      </div>
    </div>
  );
};

export default ChatPage;
