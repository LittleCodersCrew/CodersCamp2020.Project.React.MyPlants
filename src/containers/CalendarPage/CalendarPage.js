import React, { useState, useEffect } from 'react';
import Calendar from '../../components/Calendar';
import Text from '../../components/Text';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';
import ModalEditProfile from '../../components/ModalEditProfile';

const CalendarPage = () => {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const [userName, setUserName] = useState('');
  const [userLogin, setUserLogin] = useState('');
  const { token } = useToken();

  useEffect(() => {
    const { id } = JSON.parse(atob(token.split('.')[1]));

    if (token) {
      fetch(`${Database.URL}/user/${id}`, { headers: { Authorization: `Bearer ${token}` } }, {})
        .then((res) => res.json())
        .then((json) => {
          setUserName(json.name);
          setUserLogin(json.login);
        });
    }
  });

  return (
    <div>
      <Text text={userLogin} fontsize="2em" />
      <Text text={userName} fontsize="1.5em" />
      {!show && <button onClick={openModal}>Show modal</button>}
      <ModalEditProfile closeModal={closeModal} show={show} />
      <Calendar />
    </div>
  );
};

export default CalendarPage;
