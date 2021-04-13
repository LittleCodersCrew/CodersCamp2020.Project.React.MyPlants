/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Database from '../../database';
import useToken from '../../hooks/useToken/useToken';
import { SearchPlantConstants } from '../../constants/SearchPlantConstants';

import plantLeaf from '../../assets/illustrations/plant-leaf.png';
import noPlant from '../../assets/icons/Paper Fail.png';
import {
  container,
  title,
  basicInfo,
  detailedInfo,
  submitBtn,
  plantInfo,
  backgroundWrap,
  background
} from './AddPlant.module.scss';
import styles from './modal.module.scss';

const plantSchema = {
  image: '',
  name: '',
  latin_name: '',
  min_temperature: undefined,
  max_temperature: undefined,
  watering: '',
  watering_method: '',
  subsoil: '',
  conditioners: '',
  spraying: '',
  sunlight: '',
  humidity: '',
  application: '',
  accepted: false,
  species: '',
  comments: [],
  toxicity: {
    human: false,
    animal: false
  }
};

const species = [
  ['climber', '606b8a912574d128306d8bcf'],
  ['perennial', '606c2b9f0f4fc05c68f6d4a8'],
  ['succulent', '606c30770f4fc05c68f6d4a9'],
  ['palm', '606dc394ce347a6090dcd27a'],
  ['tree', '60704b622326f10e5cfe61f6']
];

const AddPlant = () => {
  const [show, setShow] = useState(false);
  const [plant, setPlant] = useState(plantSchema);
  const [addP, setAddP] = useState('');
  const { token } = useToken();

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const editHandler = () => {
    closeModal();
  };

  const deleteHandler = () => {
    setPlant(plantSchema);
    closeModal();
  };

  const onChange = (property, value) => {
    setAddP('');
    const temp = plant;
    if (property.toLowerCase() === 'animals at home?') {
      property = 'animal';
    } else if (property.toLowerCase() === 'latin name') {
      property = 'latin_name';
    } else if (property.toLowerCase() === 'min temperature') {
      property = 'min_temperature';
      value = Math.floor(value);
    } else if (property.toLowerCase() === 'max temperature') {
      property = 'max_temperature';
      value = Math.floor(value);
    } else if (property.toLowerCase() === 'watering method') {
      property = 'watering_method';
    } else if (property.toLowerCase() === 'toxicity') {
      property = 'toxicity.human';
      value = value === 'yes' ? true : false;
    } else if (property.toLowerCase() === 'animal') {
      property = 'toxicity.animal';
      value = value === 'yes' ? true : false;
    } else if (property.toLowerCase() === 'add picture') {
      property = 'image';
    }
    temp[property.toLowerCase()] = value;
    setPlant(temp);
  };

  const savePlant = () => {
    if (
      plant.image !== '' &&
      plant.name !== '' &&
      plant.latin_name !== '' &&
      plant.min_temperature !== undefined &&
      plant.min_temperature !== undefined &&
      plant.watering !== '' &&
      plant.watering_method !== '' &&
      plant.subsoil !== '' &&
      plant.conditioners !== '' &&
      plant.spraying !== '' &&
      plant.species !== '' &&
      plant.sunlight !== '' &&
      plant.humidity !== '' &&
      plant.application !== ''
    ) {
      const findSpecie = species.find((specie) => specie[0] === plant.species);
      // eslint-disable-next-line prefer-destructuring
      plant.species = findSpecie[1];

      fetch(`${Database.URL}/plant/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(plant)
      });
    } else {
      return setAddP(<p className={styles.valid}>All required fields, check spelling.</p>);
    }
    return closeModal();
  };

  useEffect(() => {}, [plant.image]);

  const removePlant = (e) => {
    e.preventDefault();
    document.querySelector('#p > input').value = '';
    setPlant({ ...plant, image: '' });
  };

  return (
    <div className={container}>
      <div className={title}>
        <Text text="Help us grow!" fontsize="2em" />
        <Text
          text="If you did not find your plant in our base, you can add it below"
          fontsize="2em"
        />
      </div>
      <form>
        <div className={basicInfo}>
          <Input text="Name" cb={onChange} />
          <Input text="Latin Name" cb={onChange} />
          <Select title="Species" values={SearchPlantConstants.species} cb={onChange} />
        </div>
        <div className={detailedInfo}>
          <Input text="Min temperature" cb={onChange} />
          <Select title="Humidity" values={SearchPlantConstants.humidity} cb={onChange} />
          <Select title="Watering" values={SearchPlantConstants.watering} cb={onChange} />
          <Select title="Application" values={SearchPlantConstants.application} cb={onChange} />
          <Input text="Max Temperature" cb={onChange} />
          <Select title="Sunlight" values={SearchPlantConstants.sunlight} cb={onChange} />
          <Select
            title="Watering Method"
            values={SearchPlantConstants.watering_method}
            cb={onChange}
          />
          <Select title="Subsoil" values={SearchPlantConstants.subsoil} cb={onChange} />
          <Select title="Conditioners" values={SearchPlantConstants.conditioners} cb={onChange} />
          <Select title="Spraying" values={SearchPlantConstants.spraying} cb={onChange} />
          <Select title="Toxic for humans?" values={SearchPlantConstants.toxicity} cb={onChange} />
          <Select title="Toxic for animals?" values={SearchPlantConstants.animal} cb={onChange} />
          <div className={plantInfo} id="p">
            <img src={plant.image === '' ? plantLeaf : plant.image} alt="plant" />
            <button onClick={removePlant}>
              <img src={noPlant} alt="no-plant" />
            </button>

            <Input text="Add picture" cb={onChange} />
          </div>
        </div>
        <div className={backgroundWrap}>
          <div className={background} />
        </div>
        <div className={submitBtn}>
          {!show && <Button type="submit" onClick={openModal} text="Add your plant" />}
        </div>
      </form>

      <section className={show ? styles.modal : styles.hide} onClick={closeModal}>
        <div className={styles.modalShow} onClick={(e) => e.stopPropagation()}>
          <div className={styles.info}>
            <img
              className={styles.image}
              src={plant.image === '' ? plantLeaf : plant.image}
              alt="plant"
            />
            <div className={styles.about}>
              <div>
                <h2>{plant.name}</h2>
                <h3>{plant.latin_name}</h3>
              </div>
              <div className={styles.details}>
                <p>
                  <span>Species:</span>
                  <span>{plant.species}</span>
                </p>
                <p>
                  <span>Min temperature:</span>
                  <span>{plant.min_temperature} °C</span>
                </p>
                <p>
                  <span>Max temperature:</span>
                  <span>{plant.max_temperature} °C</span>
                </p>
                <p>
                  <span>Sunlight:</span>
                  <span>{plant.sunlight}</span>
                </p>
                <p>
                  <span>Humidity:</span>
                  <span>{plant.humidity}</span>
                </p>
                <p>
                  <span>Watering:</span>
                  <span>{plant.watering}</span>
                </p>
                <p>
                  <span>Watering method:</span>
                  <span>{plant.watering_method}</span>
                </p>
                <p>
                  <span>Application:</span>
                  <span>{plant.application}</span>
                </p>
                <p>
                  <span>Subsoil: </span>
                  <span>{plant.subsoil}</span>
                </p>
                <p>
                  <span>Conditioners: </span>
                  <span>{plant.conditioners}</span>
                </p>
                <p>
                  <span>Spraying: </span>
                  <span>{plant.spraying}</span>
                </p>
                <p>
                  <span>Toxicity: </span>
                  <span>{plant.toxicity?.human ? 'yes' : 'no'}</span>
                </p>
                <p>
                  <span>Safe for domestic animals: </span>
                  <span>{plant.toxicity?.animal ? 'no' : 'yes'}</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.editDelete}>
            <Button text="Edit" onClick={editHandler} />
            <Button text="Delete" onClick={deleteHandler} />
          </div>
          <div className={styles.text}>
            <p>Thank you for your participation!</p>
            <p>
              As soon as it is verified by our team, this plant will be available for others in our
              base.
            </p>
          </div>
          <div className={styles.save}>
            {addP}
            <Button text="Save" onClick={savePlant} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddPlant;
