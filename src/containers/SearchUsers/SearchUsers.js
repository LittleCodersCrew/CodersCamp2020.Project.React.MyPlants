import React, { useEffect, useState } from 'react';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Database from '../../database';

import { searchBar, searchUsersContainer, noUsers } from './SearchUsers.module.scss';

import useToken from '../../hooks/useToken/useToken';
import SearchUserItem from '../../components/SearchUserItem/SearchUserItem';

const SearchUsers = () => {
  const { token } = useToken();
  const [users, setUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [searchedUser, setSearchedUser] = useState('');

  const removeUserFromArray = (array) => {
    if (!Array.isArray(array) || array.length === 0) return [];
    const userId = JSON.parse(atob(token.split('.')[1])).id;
    return array.filter((item) => item._id !== userId);
  };

  const chooseUsers = (array, amounth = 3) => {
    if (array.length === 0) return [];

    const result = removeUserFromArray(array);
    return result.slice(0, amounth);
  };

  useEffect(() => {
    const getUsers = async () => {
      let response = await fetch(`${Database.URL}/user`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      });
      response = await response.json();
      setUsers(response);
      const choosenUsers = chooseUsers(response);
      setCurrentUsers(choosenUsers);
    };

    getUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (property, value) => {
    setSearchedUser(value);
  };

  const handleSubmit = () => {
    const array = removeUserFromArray(users);
    const choosenUsers = array.filter((item) => {
      if (item.name.toLowerCase().indexOf(searchedUser.toLowerCase()) > -1) return item;
      if (item.login.toLowerCase().indexOf(searchedUser.toLowerCase()) > -1) return item;
      if (item.surname.toLowerCase().indexOf(searchedUser.toLowerCase()) > -1) return item;
      if (item.email.toLowerCase().indexOf(searchedUser.toLowerCase()) > -1) return item;
      return undefined;
    });

    setCurrentUsers(choosenUsers);
  };

  return (
    <div className={searchUsersContainer}>
      <Text text="Find other plant lovers!" fontsize="33px" />
      <div className={searchBar}>
        <Input text="Search for user" cb={onChange} />
        <Button type="button" text="Search" onClick={handleSubmit} />
      </div>
      <div>
        {currentUsers.length > 0 ? currentUsers.map((user, index) => (
          // eslint-disable-next-line max-len
          // eslint-disable-next-line no-nested-ternary
          <SearchUserItem key={user._id} id={user._id} name={user.name} login={user.login} plants={user.plants} notes={user.notes} bgcolor={index % 3 === 0 ? '#BCD27F' : index % 2 === 0 ? '#7FD2B4' : undefined} />
        )) : (
          <div className={noUsers}>
            <Text text="We could not find any matching user" fontsize="25px" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchUsers;
