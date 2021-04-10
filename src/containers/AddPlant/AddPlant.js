import React, { useState } from 'react';
// import axios from 'axios';
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
  const [name, setName] = useState();
  const [latinName, setLatinName] = useState();
  // const [species, setSpecies] = useState();
  const [minTemp, setMinTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [watering, setWatering] = useState();
  const [application, setApplication] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [sunlight, setSunlight] = useState();
  const [waterMethod, setWaterMethod] = useState();
  const [subsoil, setSubsoil] = useState();
  const [conditioners, setConditioners] = useState();
  const [spraying, setSpraying] = useState();

  return (
    <div className={container}>
      <div className={title}>
        <Text text="Help us grow!" fontsize="2em" />
        <Text text="If you did not find your plant in our base, you can add it below." fontsize="2em" />
      </div>
      <form>
        <div className={basicInfo}>
          <Modal closeModal={closeModal} show={show} />
          <Input text="Name" onChange={(e) => setName(e.target.value)} value={name} />
          <Input text="Latin Name" onChange={(e) => setLatinName(e.target.value)} value={latinName} />
          <Select title="Species" />
        </div>
        <div className={detailedInfo}>
          <Select
            title="Min temperature"
            values={[0, 5, 10]}
            onChange={(e) => setMinTemp(e.target.value)}
            value={minTemp}
          />
          <Select
            title="Humidity"
            values={['moderately moist soil', 'moist soil', 'dry']}
            onChange={(e) => setHumidity(e.target.value)}
            value={humidity}
          />
          <Select
            title="Watering"
            values={['regulary but not intensively', 'often', 'rarely']}
            onChange={(e) => setWatering(e.target.value)}
            value={watering}
          />
          <Select
            title="Application"
            values={['decorative', 'edible', 'medical use']}
            onChange={(e) => setApplication(e.target.value)}
            value={application}
          />
          <Select
            title="Max Temperature"
            values={[25, 30, 35]}
            onChange={(e) => setMaxTemp(e.target.value)}
            value={maxTemp}
          />
          <Select
            title="Sunlight"
            values={['sun, partial shade, shade', 'sun', 'partial shade', 'shade', 'sun, partial shade']}
            onChange={(e) => setSunlight(e.target.value)}
            value={sunlight}
          />
          <Select
            title="Watering Method"
            values={['to the pot', 'on the saucer or under the leaves']}
            onChange={(e) => setWaterMethod(e.target.value)}
            value={waterMethod}
          />
          <Select
            title="Subsoil"
            values={['low soil requirements', 'peat, dertile, fresh, well-drained', 'permeable and well-drained substrate']}
            onChange={(e) => setSubsoil(e.target.value)}
            value={subsoil}
          />
          <Select
            title="Conditioners"
            values={['Fertilizer for plants with ornamental leaves', 'mineral fertilizer for potted plants', 'fertilizer for cacti and succulents']}
            onChange={(e) => setConditioners(e.target.value)}
            value={conditioners}
          />
          <Select
            title="Spraying"
            values={['often', 'don\'t need', 'no']}
            onChange={(e) => setSpraying(e.target.value)}
            value={spraying}
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
          {!show && <Button text="Add your plant" onClick={openModal} />}
        </div>
      </form>
    </div>
  );
};

export default AddPlant;
