import React from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { container, basicInfo, detailedInfo, input, select } from './AddPlant.module.scss';
import PlantPic from '../../assets/illustrations/plant-leaf.png';
import RemovePic from '../../assets/icons/Paper Fail.png';
import Button from '../../components/Button/Button';

const AddPlant = () => (
  <div className={container}>
    <div className={basicInfo}>
      <h1>
        Help us grow!
        <br />
        If you did not find your plant in our base, you can add it below.
      </h1>
      <Input className={input} text="Name" />
      <Input className={input} text="Latin Name" />
      <Select className={select} title="Species" />
    </div>
    <div className={detailedInfo}>
      <Select className={select} title="Min temperature" />
      <Select className={select} title="Humidity" />
      <Select className={select} title="Watering" />
      <Select className={select} title="Application" />
      <Select className={select} title="Max Temperature" />
      <Select className={select} title="Sunlight" />
      <Select className={select} title="Watering Method" />
      <Select className={select} title="Subsoil" />
      <Select className={select} title="Conditioners" />
      <Select className={select} title="Spraying" />
      <Select className={select} title="Toxicity" />
      <Select className={select} title="Animals at home?" />
    </div>
    <div className="addPicture">
      <img src={PlantPic} alt="sample plant" style={{ height: '100px', width: '100px' }} />
      <img src={RemovePic} alt="remove" />
      <Button text="Add picture" />
    </div>
    <Button text="Add your plant" />
  </div>
);

export default AddPlant;
