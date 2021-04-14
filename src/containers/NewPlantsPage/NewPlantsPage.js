import React, { useState, useEffect } from 'react';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';
import { wrapper } from './NewPlantsPage.module.scss';
import NewPlant from '../../components/NewPlant';
import Text from '../../components/Text';

const NewPlantsPage = () => {
  const [newPlants, setNewPlants] = useState([]);
  const { token } = useToken();

  useEffect(() => {
    async function fetchPlants() {
      let plants = [];

      await fetch(`${Database.URL}/plant/`)
        .then((res) => res.json())
        .then((json) => {
          plants = json;
        });

      plants = plants.filter((plant) => plant.accepted === false);

      async function fetchSpecies(id) {
        return fetch(`${Database.URL}/species/${id}`)
          .then((res) => res.json())
          .then((json) => json.name);
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const p of plants) {
        // eslint-disable-next-line no-await-in-loop
        const species = await fetchSpecies(p.species);
        p.species = species;
      }
      setNewPlants(plants);
    }

    fetchPlants();
  }, [token, newPlants]);

  return (
    <div className={wrapper}>
      <Text text="New plants" fontsize="2rem" />
      {newPlants.length === 0 ? <Text text="No new plants yet..." fontsize="1.5rem" /> : newPlants.map((p) => <NewPlant key={p.name} plant={p} />)}
    </div>
  );
};

export default NewPlantsPage;
