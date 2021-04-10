/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
// import axios from 'axios';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { container, title, basicInfo, detailedInfo, addPicture, plantPicture, removePicture, addBtn, submit } from './AddPlant.module.scss';
import PlantPic from '../../assets/illustrations/plant-leaf.png';
import RemovePic from '../../assets/icons/Paper Fail.png';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Modal from '../Modal';

const AddPlant = () => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line no-alert
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className={container}>
      <div className={title}>
        <Text text="Help us grow!" fontsize="2em" />
        <Text text="If you did not find your plant in our base, you can add it below." fontsize="2em" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={basicInfo}>
          <Modal closeModal={closeModal} show={show} />
          <Input text="Name" {...register('name')} />
          <Input text="Latin Name" {...register('latinName')} />
          <Select title="Species" />
        </div>
        <div className={detailedInfo}>
          <Select
            title="Min temperature"
            values={[0, 5, 10]}
            {...register('minTemp')}
          />
          <Select
            title="Humidity"
            values={['moderately moist soil', 'moist soil', 'dry']}
            {...register('humidity')}
          />
          <Select
            title="Watering"
            values={['regulary but not intensively', 'often', 'rarely']}
            {...register('watering')}
          />
          <Select
            title="Application"
            values={['decorative', 'edible', 'medical use']}
            {...register('application')}
          />
          <Select
            title="Max Temperature"
            values={[25, 30, 35]}
            {...register('maxTemp')}
          />
          <Select
            title="Sunlight"
            values={['sun, partial shade, shade', 'sun', 'partial shade', 'shade', 'sun, partial shade']}
            {...register('sunlight')}
          />
          <Select
            title="Watering Method"
            values={['to the pot', 'on the saucer or under the leaves']}
            {...register('wateringMethod')}
          />
          <Select
            title="Subsoil"
            values={['low soil requirements', 'peat, dertile, fresh, well-drained', 'permeable and well-drained substrate']}
            {...register('subsoil')}
          />
          <Select
            title="Conditioners"
            values={['Fertilizer for plants with ornamental leaves', 'mineral fertilizer for potted plants', 'fertilizer for cacti and succulents']}
            {...register('conditioners')}
          />
          <Select
            title="Spraying"
            values={['often', 'don\'t need', 'no']}
            {...register('spraying')}
          />
          <Select title="Toxicity" />
          <Select title="Animals at home?" />
        </div>
        <div className={addPicture}>
          <div className={plantPicture}>
            <img src={PlantPic} alt="sample plant" style={{ height: '100px', width: '100px' }} />
          </div>
          <div className={removePicture}>
            <img src={RemovePic} alt="remove" style={{ height: '25px', width: '25px' }} />
          </div>
          <div className={addBtn}>
            <Button text="Add picture" />
          </div>
        </div>
        <div className={submit}>
          {!show && <Button text="Add your plant" type="submit" onClick={openModal} />}
        </div>
      </form>
    </div>
  );
};

export default AddPlant;
