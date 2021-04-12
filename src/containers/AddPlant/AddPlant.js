// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import useSignUpForm from '../../hooks/useSignUpForm/useSignUpForm';
import Modal from './Modal';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { container, title, basicInfo, detailedInfo } from './AddPlant.module.scss';

const AddPlant = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className={container}>
      <div className={title}>
        <Text text="Help us grow!" fontsize="2em" />
        <Text text="If you did not find your plant in our base, you can add it below" fontsize="2em" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={basicInfo}>
          <Modal
            closeModal={closeModal}
            show={show}
            name={inputs}
            latin={inputs}
            minTemperature={inputs}
            humidity={inputs}
            watering={inputs}
            application={inputs}
            maxTemperature={inputs}
            sunlight={inputs}
            wateringMethod={inputs}
            subsoil={inputs}
            conditioners={inputs}
            spraying={inputs}
          />
          <Input text="Name" name="name" onChange={handleInputChange} value={inputs.name} />
          <Input text="Latin Name" name="latinName" onChange={handleInputChange} value={inputs.latinName} />
          <Select title="Species" />
        </div>
        <div className={detailedInfo}>
          <Select
            title="Min temperature"
            values={[0, 5, 10]}
            onChange={handleInputChange}
            value={inputs.minTemp}
          />
          <Select
            title="Humidity"
            values={['moderately moist soil', 'moist soil', 'dry']}
            onChange={handleInputChange}
            value={inputs.humidity}
          />
          <Select
            title="Watering"
            values={['regulary but not intensively', 'often', 'rarely']}
            onChange={handleInputChange}
            value={inputs.watering}
          />
          <Select
            title="Application"
            values={['decorative', 'edible', 'medical use']}
            onChange={handleInputChange}
            value={inputs.application}
          />
          <Select
            title="Max Temperature"
            values={[25, 30, 35]}
            onChange={handleInputChange}
            value={inputs.maxTemp}
          />
          <Select
            title="Sunlight"
            values={['sun, partial shade, shade', 'sun', 'partial shade', 'shade', 'sun, partial shade']}
            onChange={handleInputChange}
            value={inputs.sunlight}
          />
          <Select
            title="Watering Method"
            values={['to the pot', 'on the saucer or under the leaves']}
            onChange={handleInputChange}
            value={inputs.wateringMethod}
          />
          <Select
            title="Subsoil"
            values={['low soil requirements', 'peat, dertile, fresh, well-drained', 'permeable and well-drained substrate']}
            onChange={handleInputChange}
            value={inputs.subsoil}
          />
          <Select
            title="Conditioners"
            values={['Fertilizer for plants with ornamental leaves', 'mineral fertilizer for potted plants', 'fertilizer for cacti and succulents']}
            onChange={handleInputChange}
            value={inputs.conditioners}
          />
          <Select
            title="Spraying"
            values={['often', 'don\'t need', 'no']}
            onChange={handleInputChange}
            value={inputs.spraying}
          />
          <Select title="Toxicity" />
          <Select title="Animals at home?" />
        </div>
      </form>
      {!show && <Button type="submit" onClick={openModal} text="Add your plant" />}
    </div>
  );
};

export default AddPlant;
