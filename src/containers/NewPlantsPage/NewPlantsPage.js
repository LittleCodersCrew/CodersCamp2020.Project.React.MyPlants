/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Database from '../../database';
// import Background from '../../components/Background';
// import { wrapper } from './AuthorsPage.module.scss';

const NewPlantsPage = () => {
  const [newPlants, setNewPlants] = useState([]);

  useEffect(() => {
    async function fetchPlants() {
      let plants = [];

      await fetch(`${Database.URL}/plants/`)
        .then((res) => res.json())
        .then((json) => {
          plants = json;
        });

      plants.filter((plant) => plant.accepted === false);
      setNewPlants(plants);
    }

    fetchPlants();
  }, []);
  console.log(newPlants);
  return (newPlants);
};

export default NewPlantsPage;
