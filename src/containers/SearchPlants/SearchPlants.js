import React, { useState, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { searchPlantsContainer, searchPlantsHeader, searchPlantsMenu, searchPlantsContent, noFoundPlantsContainer, background, backgroundWrap, newPlant } from './SearchPlants.module.scss';

import Text from '../../components/Text';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import SearchPlantItem from '../../components/SearchPlantItem/SearchPlantItem';

import { SearchPlantConstants, SearchPlantKeys } from '../../constants/SearchPlantConstants';

import Database from '../../database';
import iconNoSearch from '../../assets/illustrations/icon - no search.png';

import useToken from '../../hooks/useToken/useToken';

const SearchPlants = () => {
  const AMOUNTHOFPLANTSTOSHOW = 3;
  const [plants, setPlants] = useState([]);
  const [currentPlants, setCurrentPlants] = useState([]);
  const [searchedPlant, dispatch] = useReducer(
    (searchPlant, action) => ({ ...searchPlant, [action.name]: action.value }),
    {
      name: undefined,
      mintemp: undefined,
      watering: undefined,
      subsoil: undefined,
      spraying: undefined,
      latinname: undefined,
      maxtemp: undefined,
      watering_method: undefined,
      conditioners: undefined,
      sunlight: undefined,
      species: undefined,
      application: undefined,
      humidity: undefined,
      toxicity: undefined,
      animal: undefined
    }
  );

  const { token } = useToken();

  const history = useHistory();

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

  const checkAcceptedPlants = (array) => {
    if (!array) return [];
    return array.filter((item) => item.accepted);
  };

  useEffect(() => {
    const getPlants = async () => {
      let response = await fetch(`${Database.URL}/plant`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      response = await response.json();
      const acceptedPlants = checkAcceptedPlants(response);
      setPlants(acceptedPlants);
      const randomPlants = getRandomPlants(response, AMOUNTHOFPLANTSTOSHOW);
      setCurrentPlants(randomPlants);
    };

    getPlants();
  }, []);

  const onChange = (property, value) => {
    if (property.toLowerCase() === 'animals at home?') {
      dispatch({ name: 'animal', value });
    } else if (property.toLowerCase() === 'latin name') {
      dispatch({ name: 'latinname', value });
    } else if (property.toLowerCase() === 'min temperature') {
      dispatch({ name: 'mintemp', value });
    } else if (property.toLowerCase() === 'max temperature') {
      dispatch({ name: 'maxtemp', value });
    } else if (property.toLowerCase() === 'watering method') {
      dispatch({ name: 'watering_method', value });
    } else {
      dispatch({ name: property.toLowerCase(), value });
    }
  };

  const getMatchedPlants = (array, searchObject) => {
    if (array.length === 0) return array;
    const result = [];
    array.map((item) => {
      for (let i = 0; i < SearchPlantKeys.length; i += 1) {
        const property = SearchPlantKeys[i];
        if (property === 'toxicity' && searchObject.toxicity !== undefined) {
          if (searchObject[property] === 'yes' && item[property].human === true) break;
          if (searchObject[property] === 'no' && item[property].human === false) break;
        } else if (property === 'animal' && searchObject.animal !== undefined) {
          if (searchObject[property] === 'yes' && item.toxicity.animal === true) break;
          if (searchObject[property] === 'no' && item.toxicity.animal === false) break;
        } else if (property === 'name' && searchObject.name !== undefined) {
          if (item.name.toLowerCase().indexOf(searchObject.name.toLowerCase()) === -1) break;
        } else if (property === 'latinname' && searchObject.latinname !== undefined) {
          if (item.latin_name.toLowerCase().indexOf(searchObject.latinname.toLowerCase()) === -1) break;
        } else if (property === 'mintemp' && (searchObject.mintemp !== undefined || searchObject.mintemp !== '')) {
          if (item.min_temperature < searchObject.mintemp) break;
        } else if (property === 'maxtemp' && (searchObject.maxtemp !== undefined || searchObject.maxtemp !== '')) {
          if (item.max_temperature > searchObject.maxtemp) break;
        } else if (searchObject[property] !== undefined && searchObject[property] !== item[property]) {
          break;
        }

        if ((searchObject[property] === item[property]
             || searchObject[property] === undefined)
             && i === SearchPlantKeys.length - 1) {
          result.push(item);
          break;
        }

        if ((property === 'name' || property === 'latinname' || property === 'mintemp' || property === 'maxtemp' || property === 'toxicity' || property === 'animal') && i === SearchPlantKeys.length - 1) {
          result.push(item);
        }
      }
      return null;
    });

    return result;
  };

  const routerChange = () => {
    history.push('/add-plant');
  };

  const handleSubmit = () => {
    const result = getMatchedPlants(plants, searchedPlant);
    setCurrentPlants([...result]);
  };

  return (
    <div className={searchPlantsContainer}>
      <div className={searchPlantsHeader}>
        <Text text="Find a perfect plant for you!" fontsize="33px" />
        <Text text="Already have one? Check how to take best care of it." fontsize="33px" />
      </div>
      <div className={searchPlantsMenu}>
        <Input text="Name" cb={onChange} />
        <Input text="Min temperature" cb={onChange} />
        <Select title="Watering" values={SearchPlantConstants.watering} cb={onChange} />
        <Select title="Subsoil" values={SearchPlantConstants.subsoil} cb={onChange} />
        <Select title="Spraying" values={SearchPlantConstants.spraying} cb={onChange} />
        <Input text="Latin name" cb={onChange} />
        <Input text="Max temperature" cb={onChange} />
        <Select title="Watering method" values={SearchPlantConstants.watering_method} cb={onChange} />
        <Select title="Conditioners" values={SearchPlantConstants.conditioners} cb={onChange} />
        <Select title="Sunlight" values={SearchPlantConstants.sunlight} cb={onChange} />
        <Select title="Species" values={SearchPlantConstants.species} cb={onChange} />
        <Select title="Application" values={SearchPlantConstants.application} cb={onChange} />
        <Select title="Humidity" values={SearchPlantConstants.humidity} cb={onChange} />
        <Select title="Toxicity" values={SearchPlantConstants.toxicity} cb={onChange} />
        <Select title="Animals at home?" values={SearchPlantConstants.animal} cb={onChange} />
        <Button type="button" text="Search" onClick={handleSubmit} />
      </div>
      <div className={searchPlantsContent}>
        {currentPlants?.length > 0 ? (currentPlants.map((plant, index) => (
          <div>
            <SearchPlantItem
              key={plant._id}
              image={plant.image}
              name={plant.name}
              latinName={plant.latin_name}
              minTemp={plant.min_temperature}
              maxTemp={plant.max_temperature}
              sunlight={plant.sunlight}
              humidity={plant.humidity}
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
        <Button type="button" role="navigation" text="Add your plant" onClick={routerChange} />
      </div>
      )}
    </div>
  );
};

export default SearchPlants;
