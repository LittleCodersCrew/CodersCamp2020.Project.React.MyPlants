/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '../../components/Text';
import PlantProfileGarden from '../../components/PlantProfileGarden';
import styles from './gardenPage.module.scss';
import useToken from '../../hooks/useToken/useToken';
import Database from '../../database';
import ModalEditProfile from '../../components/ModalEditProfile';
import SmallButton from '../../components/SmallButton';
import AddGardenPlant from '../AddGardenPlant';

const GardenPage = ({ data }) => {
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
    <PlantProfileGarden
      key={p._id}
      userId={id}
      plantName={(p.name.length > 10) ? p.name.slice(0, 10) : p.name}
      plantId={p.plant}
      plantUserId={p._id}
      plantPhoto={p.image}
      description={p.description}
    />
  );

  if (Object.keys(data).length !== 0) {
    console.log(data);
  }

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
      <Text text="Add new plant to your garden" fontsize="2em" />
      <AddGardenPlant />
    </div>
  );
};

GardenPage.propTypes = { data: PropTypes.object };
GardenPage.defaultProps = { data: {} };

export default GardenPage;
