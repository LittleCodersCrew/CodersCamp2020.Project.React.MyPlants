import React from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import styles from './AddPlant.module.scss';
import PlantPic from '../../assets/illustrations/plant-leaf.png';
import RemovePic from '../../assets/icons/Paper Fail.png';
import Button from '../../components/Button/Button';

const AddPlant = () => (
  <div className={styles.container}>
    <div className={styles.basicInfo}>
      <h1 className={styles.title}>
        Help us grow!
        <br />
        If you did not find your plant in our base, you can add it below.
      </h1>
      <Input className={styles.input} text="Name" />
      <Input className={styles.input} text="Latin Name" />
      <Select className={styles.select} title="Species" />
    </div>
    <div className={styles.detailedInfo}>
      <Select className={styles.select} title="Min temperature" />
      <Select className={styles.select} title="Humidity" />
      <Select className={styles.select} title="Watering" />
      <Select className={styles.select} title="Application" />
      <Select className={styles.select} title="Max Temperature" />
      <Select className={styles.select} title="Sunlight" />
      <Select className={styles.select} title="Watering Method" />
      <Select className={styles.select} title="Subsoil" />
      <Select className={styles.select} title="Conditioners" />
      <Select className={styles.select} title="Spraying" />
      <Select className={styles.select} title="Toxicity" />
      <Select className={styles.select} title="Animals at home?" />
    </div>
    <div className={styles.addPicture}>
      <div className={styles.plantPicture}>
        <img src={PlantPic} alt="sample plant" style={{ height: '100px', width: '100px' }} />
      </div>
      <div className={styles.removePicture}>
        <img src={RemovePic} alt="remove" style={{ height: '25px', width: '25px' }} />
      </div>
      <div className={styles.addBtn}>
        <Button className={styles.button} text="Add picture" />
      </div>
    </div>
    <div className={styles.submit}>
      <Button className={styles.submitBtn} text="Add your plant" />
    </div>
  </div>
);

export default AddPlant;
