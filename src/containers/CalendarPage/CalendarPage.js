import React, { useState, useEffect } from 'react';
import Calendar from '../../components/Calendar';
import Text from '../../components/Text';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';

const CalendarPage = () => {
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
      <Calendar />
    </div>
  );
};

export default CalendarPage;
