import React, { useState } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import styles from './AddPlant.module.scss';
import PlantPic from '../../assets/illustrations/plant-leaf.png';
import RemovePic from '../../assets/icons/Paper Fail.png';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Modal from '../Modal';

const AddPlant = () => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text text="Help us grow!" fontsize="2em" />
        <Text text="If you did not find your plant in our base, you can add it below." fontsize="2em" />
      </div>
      <div className={styles.basicInfo}>
        <Input text="Name" />
        <Input text="Latin Name" />
        <Select title="Species" />
      </div>
      <div className={styles.detailedInfo}>
        <Select title="Min temperature" values={[0, 5, 10]} />
        <Select title="Humidity" values={['moderately moist soil', 'moist soil', 'dry']} />
        <Select title="Watering" values={['regulary but not intensively', 'often', 'rarely']} />
        <Select title="Application" values={['decorative', 'edible', 'medical use']} />
        <Select title="Max Temperature" values={[25, 30, 35]} />
        <Select title="Sunlight" values={['sun, partial shade, shade', 'sun', 'partial shade', 'shade', 'sun, partial shade']} />
        <Select title="Watering Method" values={['to the pot', 'on the saucer or under the leaves']} />
        <Select title="Subsoil" values={['low soil requirements', 'peat, dertile, fresh, well-drained', 'permeable and well-drained substrate']} />
        <Select title="Conditioners" values={['Fertilizer for plants with ornamental leaves', 'mineral fertilizer for potted plants', 'fertilizer for cacti and succulents']} />
        <Select title="Spraying" values={['often', 'don\'t need', 'no']} />
        <Select title="Toxicity" />
        <Select title="Animals at home?" />
      </div>
      <div className={styles.addPicture}>
        <div className={styles.plantPicture}>
          <img src={PlantPic} alt="sample plant" style={{ height: '100px', width: '100px' }} />
        </div>
        <div className={styles.removePicture}>
          <img src={RemovePic} alt="remove" style={{ height: '25px', width: '25px' }} />
        </div>
        <div className={styles.addBtn}>
          <Button text="Add picture" />
        </div>
      </div>
      <div className={styles.submit}>
        {!show && <Button text="Add your plant" onClick={openModal} />}
        <Modal closeModal={closeModal} show={show} />
      </div>
    </div>
  );
};

export default AddPlant;
