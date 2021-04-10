/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';
import PlantInfo from '../PlantInfo';
import Button from '../Button';
import { wrapper, plantInfo, buttons } from './NewPlant.module.scss';

const NewPlant = ({ plant }) => {
  const { id } = useParams();
  const { token } = useToken();

  const toDelete = async (e) => {
    e.preventDefault();
    fetch(`${Database.URL}/plant/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  };

  const toSave = async (e) => {
    e.preventDefault();
    fetch(`${Database.URL}/plant/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  };

  return (
    <div className={wrapper}>
      <div className={plantInfo}>
        <PlantInfo plantDetails={plant} />
      </div>
      <div className={buttons}>
        <Button text="Save" type="submit" onClick={toSave} />
        <Button text="Delete" type="submit" onClick={toDelete} />
      </div>
    </div>
  );
};

NewPlant.propTypes = {
  plant: PropTypes.shape({
    name: PropTypes.string,
    latin_name: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
    min_temperature: PropTypes.number,
    max_temperature: PropTypes.number,
    sunlight: PropTypes.string,
    humidity: PropTypes.string,
    watering: PropTypes.string,
    watering_method: PropTypes.string,
    application: PropTypes.string,
    subsoil: PropTypes.string,
    conditioners: PropTypes.string,
    spraying: PropTypes.string,
    accepted: PropTypes.bool,
    toxicity: PropTypes.shape({
      human: PropTypes.bool,
      animal: PropTypes.bool
    })
  }).isRequired
};

export default NewPlant;
