/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';
import { wrapper, chat, canals, canal, unlogged, logged } from './ChatPage.module.scss';
import Message from '../../components/Message';
import Canals from '../../components/Canals';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

const ChatPage = () => {
  const [openCanal, setOpenCanal] = useState('Main chat');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({
    chat: '',
    text: '',
    user: ''
  });
  // const [userLogin, setUserLogin] = useState('');

  const { token } = useToken();

  useEffect(() => {
    fetch(`${Database.URL}/message/`)
      .then((res) => res.json())
      .then((json) => {
        setMessages(json);
      });
  });

  const canalsId = {
    'Main chat': '6068ba811d4f091f788ea648',
    'Trade your plants': '6068ba941d4f091f788ea649'
  };

  // const findLogin = (mess) => fetch(`${Database.URL}/user/${mess.user}`, {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     'Content-Type': 'application/json'
  //   }
  // }).then((res) => res.json())
  //   .then((json) => {
  //     setUserLogin(json.login);
  //   });

  const showMessage = (mess) => {
    // findLogin(mess);
    if (mess.chat === canalsId[openCanal]) {
      return (
        <Message userName={mess.user} dateTime={mess.date.substr(0, 10)} content={mess.text} />
      );
    }
    return true;
  };

  const ifCanalOpen = (can) => (can === openCanal);

  const changeCanal = () => {
    if (openCanal === 'Main chat') {
      return setOpenCanal('Trade your plants');
    }
    return setOpenCanal('Main chat');
  };

  const sendMessage = (mess) => fetch(`${Database.URL}/message/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mess)
  }).then((data) => data.json());

  const onSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(message);
  };

  const updateMessage = (e) => {
    const userId = JSON.parse(atob(token.split('.')[1])).id;
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
      chat: canalsId[openCanal],
      user: userId
    });
  };

  if (token) {
    return (
      <div className={wrapper}>
        <div className={chat}>
          <div className={canals}>
            <div className={canal}>
              <Canals name="Main chat" ifOpen={ifCanalOpen('Main chat')} change={changeCanal} />
            </div>
            <div className={canal}>
              <Canals name="Trade your plants" ifOpen={ifCanalOpen('Trade your plants')} change={changeCanal} />
            </div>
          </div>
          {messages.map((mess) => showMessage(mess))}
          <div className={logged}>
            <form id="newMessage" method="POST" onSubmit={onSubmit}>
              <TextArea text="Send your message..." name="text" id="newMessage" onChange={updateMessage} />
              <Button text="Send" type="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={wrapper}>
      <div className={chat}>
        <div className={canals}>
          <div className={canal}>
            <Canals name="Main chat" ifOpen={ifCanalOpen('Main chat')} change={changeCanal} />
          </div>
          <div className={canal}>
            <Canals name="Trade your plants" ifOpen={ifCanalOpen('Trade your plants')} change={changeCanal} />
          </div>
        </div>
        {messages.map((mess) => showMessage(mess))}
        <p className={unlogged}>Login to send a message</p>
      </div>
    </div>
  );
};

export default ChatPage;
