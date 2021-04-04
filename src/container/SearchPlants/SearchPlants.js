import React, { useState, useEffect } from 'react';
import { searchPlantsContainer, searchPlantsHeader, searchPlantsMenu, searchPlantsContent, noFoundPlantsContainer, background, backgroundWrap, newPlant } from './SearchPlants.module.scss';

import Text from '../../components/Text';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import SearchPlantItem from '../SearchPlantItem/SearchPlantItem';

import Database from '../../database';
import iconNoSearch from '../../assets/illustrations/icon - no search.png';

import useToken from '../../hooks/useToken/useToken';

const SearchPlants = () => {
  const [plants, setPlants] = useState([]);
  const { token } = useToken();

  const getRandomPlants = (array, amounth) => {
    if (!array) return undefined;
    const result = [];
    for (let i = 0; i < amounth; i += 1) {
      const index = Math.floor(Math.random() * (array.length - 1));
      result.push(array[index]);
      array.splice(index, 1);
      if (array.length === 0) break;
    }
    return result;
  };

  useEffect(() => {
    const getPlants = async () => {
      let response = await fetch(`${Database.URL}/plant`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      response = await response.json();
      response = getRandomPlants(response, 3);
      setPlants(response);
    };

    getPlants();
  }, []);

  const handleSubmit = () => {

  };

  return (
    <div className={searchPlantsContainer}>
      <div className={searchPlantsHeader}>
        <Text text="Find a perfect plant for you!" fontsize="33px" />
        <Text text="Already have one? Check how to take best care of it." fontsize="33px" />
      </div>
      <div className={searchPlantsMenu}>
        <Input text="Name" />
        <Select title="Min temperature" values={['0', '10', '20']} />
        <Select title="Watering" />
        <Select title="Subsoil" />
        <Select title="Spraying" />
        <Input text="Latin name" />
        <Select title="Max temperature" />
        <Select title="Watering method" />
        <Select title="Conditioners" />
        <Select title="Sunlight" />
        <Select title="Species" />
        <Select title="Application" />
        <Select title="Humidity" />
        <Select title="Toxicity" />
        <Select title="Animals at home?" />
        <Button type="button" text="Search" onClick={handleSubmit} />
      </div>
      <div className={searchPlantsContent}>
        {plants?.length > 0 ? (plants.map((plant, index) => (
          <div>
            <SearchPlantItem
              // eslint-disable-next-line no-underscore-dangle
              key={plant._id.toString()}
              name={plant.name}
              latinName={plant.latin_name}
              minTemp={plant.min_temperature}
              maxTemp={plant.max_temperature}
              sunlight={plant.sunlight}
              humidity={plant.humidity}
              // eslint-disable-next-line no-nested-ternary
              bgcolor={index % 3 === 0 ? '#BCD27F' : index % 2 === 0 ? '#7FD2B4' : undefined}
            />
          </div>
        ))) : (
          <div className={noFoundPlantsContainer}>
            <div className={backgroundWrap}>
              <div className={background} />
            </div>
            <img src={iconNoSearch} alt="no found flower img" width="400px" />
            <span>
              <Text text="Upps!" fontsize="33px" />
              <Text text="We cannot find any plant matching your search. Please try something else or search other lovers’ accounts to find inspiration." fontsize="33px" />
              <Text text="If your plant is not in our base, login to add it and help us grow!" fontsize="33px" />
            </span>
          </div>
        )}
      </div>
      {token && (
      <div className={newPlant}>
        <Text text="We don’t have your plant yet?" fontsize="33px" />
        <Text text="Help us to grow our plant base. Click below to add your plant." fontsize="33px" />
        <Text text="As soon as it is checked, your plant will be added to base." fontsize="33px" />
        <Button type="button" role="navigation" text="Add your plant" onClick={() => {}} />
      </div>
      )}
    </div>
  );
};

export default SearchPlants;
