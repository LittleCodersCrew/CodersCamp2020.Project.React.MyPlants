import React, { useState, useEffect } from 'react';
import styles from './addGardenPlant.module.scss';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Select from '../../components/Select';
import useToken from '../../hooks/useToken/useToken';
import Database from '../../database';

const AddGardenPlant = () => {
  const [clearSignal, setClearSignal] = useState(false);
  const { token } = useToken();
  const [newPlant, setNewPlant] = useState({
    plant: '',
    name: '',
    description: '',
    image: ''
  });
  const currentUserId = JSON.parse(atob(token.split('.')[1])).id;
  const [plantNames, setPlantNames] = useState([]);
  const [plantIds, setPlantIds] = useState({});

  useEffect(() => {
    const getPlants = async () => {
      let response = await fetch(`${Database.URL}/plant`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      response = await response.json();

      const plantNamesTemp = [];
      const plantIdsTemp = {};

      response.forEach((plantData) => {
        plantNamesTemp.push(plantData.name);
        plantIdsTemp[plantData.name] = plantData._id;
      });

      setPlantNames(plantNamesTemp);
      setPlantIds(plantIdsTemp);
    };

    getPlants();
  }, []);

  const updatePlant = (e) => {
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${Database.URL}/user/${currentUserId}/plants`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    });
    setClearSignal((prevSignal) => !prevSignal);
    window.location.reload(false);
  };

  const selectPlant = (_title, value) => {
    const plantId = plantIds[value];
    setNewPlant({
      ...newPlant,
      plant: plantId
    });
  };

  return (
    <div>
      <form id="newComment" method="POST" className={styles.form}>
        <TextArea maxLength="10" height="3rem" text="Name" name="name" id="name" onChange={updatePlant} clearSignal={clearSignal} />
        <TextArea className={styles.description} text="Description" name="description" id="description" onChange={updatePlant} clearSignal={clearSignal} />
        <Select width="98%" title="Plant" values={plantNames} cb={selectPlant} />
        <TextArea height="3rem" className={styles.picture} text="Add picture link" name="image" id="image" onChange={updatePlant} clearSignal={clearSignal} />
        <Button text="Send" type="submit" onClick={onSubmit} />
      </form>
    </div>
  );
};

export default AddGardenPlant;
