// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import useSignUpForm from '../../hooks/useSignUpForm/useSignUpForm';
import Modal from './Modal';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { container, title, basicInfo } from './AddPlant.module.scss';

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
          <Input text="Name" name="name" onChange={handleInputChange} value={inputs.name} />
          <Input text="Latin Name" name="latinName" onChange={handleInputChange} value={inputs.latinName} />
          <Select title="Species" />
        </div>
      </form>
      {!show && <Button type="submit" onClick={openModal} text="Add your plant" />}
      <Modal closeModal={closeModal} show={show} name={inputs.name} latin={inputs.latinName} />
    </div>
  );
};

export default AddPlant;
