import React, { useState, useEffect } from 'react';
import Text from '../../components/Text';
import PlantProfile from '../../components/PlantProfile';
import styles from './gardenPage.module.scss';
import useToken from '../../hooks/useToken/useToken';
import Database from '../../database';
import ModalEditProfile from '../../components/ModalEditProfile';
import SmallButton from '../../components/SmallButton';
import AddGardenPlant from '../AddGardenPlant';

const GardenPage = () => {
  const [myPlants, setMyPlants] = useState([]);
  const [userLogin, setUserLogin] = useState('');
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const { token } = useToken();
  const { id } = JSON.parse(atob(token.split('.')[1]));

  useEffect(() => {
    fetch(`${Database.URL}/user/${id}`, {
      headers:
        {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
    }, [])
      .then((res) => res.json())
      .then((json) => {
        setMyPlants(json.plants);
      });

    if (token) {
      fetch(`${Database.URL}/user/${id}`, { headers: { Authorization: `Bearer ${token}` } }, {})
        .then((res) => res.json())
        .then((json) => {
          setUserName(json.name);
          setUserLogin(json.login);
        });
    }
  }, [id, token]);

  const showMyPlants = (p) => (
    <PlantProfile
      key={p._id}
      plantName={(p.name.length > 10) ? p.name.slice(0, 10) : p.name}
      plantId={p.plant}
      plantPhoto={p.image}
    />
  );

  return (
    <div className={styles.wrapper}>
      <Text text={userLogin} fontsize="2em" />
      <Text text={userName} fontsize="1.5em" />
      <SmallButton text="Edit Profile" fontsize="1.5em" onClick={openModal} />
      <Text text={`${userLogin}'s garden`} fontsize="2em" />
      <ModalEditProfile closeModal={closeModal} show={show} />
      <div className={styles.garden}>
        <div className={styles.plants}>
          {(myPlants.length >= 1) ? myPlants.map((p) => showMyPlants(p)) : <Text text="Garden is empty" fontsize="1em" />}
        </div>
      </div>
      <AddGardenPlant />
    </div>
  );
};

export default GardenPage;
