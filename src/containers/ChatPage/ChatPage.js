import React, { useState, useEffect } from 'react';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';
import { wrapper, chat, canals, canal, unlogged, logged, button } from './ChatPage.module.scss';
import Message from '../../components/Message';
import Canals from '../../components/Canals';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import { input } from '../../components/TextArea/TextArea.module.scss';

const ChatPage = () => {
  const [openCanal, setOpenCanal] = useState('Main chat');
  const [messages, setMessages] = useState([]);
  const [lastMess, setLastMess] = useState('');
  const [message, setMessage] = useState({
    chat: '',
    text: '',
    user: ''
  });

  const { token } = useToken();

  const canalsId = {
    'Main chat': '6068ba811d4f091f788ea648',
    'Trade your plants': '6068ba941d4f091f788ea649'
  };

  useEffect(() => {
    async function fetchMessages() {
      let messagess = [];

      await fetch(`${Database.URL}/message/`)
        .then((res) => res.json())
        .then((json) => {
          messagess = json;
        });

      async function fetchUsername(id) {
        return fetch(`${Database.URL}/user/${id}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json())
          .then((json) => json.login);
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const mess of messagess) {
        // eslint-disable-next-line no-await-in-loop
        const username = await fetchUsername(mess.user);
        mess.user = username;
      }

      setMessages(messagess);
    }

    fetchMessages();
  }, [token, openCanal, lastMess]);

  const showMessage = (mess) => {
    const dateSubstr = mess.date.substr(0, 10);
    if (mess.chat === canalsId[openCanal]) {
      return (
        // eslint-disable-next-line no-underscore-dangle
        <Message key={mess._id} userName={mess.user} dateTime={dateSubstr} content={mess.text} />
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
  })
    .then((data) => data.json())
    .then(() => setOpenCanal('Main chat'));

  const onSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(message);
    document.getElementsByClassName(`${input}`)[0].value = '';
    // eslint-disable-next-line max-len
    setLastMess(message);
    return (message.chat === canalsId['Main chat'] ? setOpenCanal('Main chat') : setOpenCanal('Trade your plants'));
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

  const renderingText = () => ((messages.length === 0) ? <p>Rendering or no messages yet ...</p> : '');

  if (token) {
    return (
      <div className={wrapper}>
        <div className={canals}>
          <div className={canal}>
            <Canals name="Main chat" ifOpen={ifCanalOpen('Main chat')} change={changeCanal} />
          </div>
          <div className={canal}>
            <Canals name="Trade your plants" ifOpen={ifCanalOpen('Trade your plants')} change={changeCanal} />
          </div>
        </div>
        <div className={chat}>
          {renderingText()}
          {messages.map((mess) => showMessage(mess))}
          <div className={logged}>
            <form id="newMessage" method="POST">
              <TextArea text="Send your message..." name="text" id="newMessage" onChange={updateMessage} />
              <div className={button}>
                <Button text="Send" type="submit" onClick={onSubmit} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={wrapper}>
      <div className={canals}>
        <div className={canal}>
          <Canals name="Main chat" ifOpen={ifCanalOpen('Main chat')} change={changeCanal} />
        </div>
        <div className={canal}>
          <Canals name="Trade your plants" ifOpen={ifCanalOpen('Trade your plants')} change={changeCanal} />
        </div>
      </div>
      <div className={chat}>
        {renderingText()}
        {messages.map((mess) => showMessage(mess))}
        <p className={unlogged}>Login to send a message</p>
      </div>
    </div>
  );
};

export default ChatPage;
