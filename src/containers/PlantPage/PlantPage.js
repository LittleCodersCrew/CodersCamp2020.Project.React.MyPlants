/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BackButton from '../../components/BackButton';
import PlantInfo from '../../components/PlantInfo';
import Comments from '../Comments';
import { wrapper, info } from './plantPage.module.scss';
import Database from '../../database';

const PlantPage = () => {
  const [plantDetails, setPlantDetails] = useState([]);
  const { plantNameFromURL } = useParams();

  useEffect(() => {
    const fetchPlantInfo = async (plantName) => {
      const details = await fetch(`${Database.URL}/plant/`)
        .then((res) => res.json())
        .then((json) => json.find((plant) => plant.name === plantName));
      setPlantDetails(details);

      const fetchPlantSpecies = async (plantSpeciesId) => {
        let species;
        try {
          species = await fetch(`${Database.URL}/species/${plantSpeciesId}`)
            .then((res) => res.json())
            .then((json) => json.name);
          setPlantDetails((restDetails) => ({ ...restDetails, species }));
        } catch (e) {
          setPlantDetails((restDetails) => ({ ...restDetails, species: 'Unknown' }));
        }
      };
      fetchPlantSpecies(details.species);
    };

    fetchPlantInfo(plantNameFromURL);
  }, [plantNameFromURL]);

  if (plantDetails.length === 0) {
    return <p>Rendering..</p>;
  }

  return (
    <div className={wrapper}>
      <BackButton />
      <div className={info}>
        <PlantInfo plantDetails={plantDetails} />
      </div>
      <Comments comments={plantDetails.comments} plantId={plantDetails._id} />
    </div>
  );
};

export default PlantPage;
