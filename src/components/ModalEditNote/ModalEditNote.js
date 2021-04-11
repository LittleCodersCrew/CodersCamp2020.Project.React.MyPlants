/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Text from '../Text';
import Select from '../Select';
import useToken from '../../hooks/useToken/useToken';
import Database from '../../database';
import closeSquare from '../../assets/icons/Close Square.png';
import { hide, overlay, modal, form, input, button } from './ModalEditNote.module.scss';

const ModalEditNote = (props) => {
  const { show, closeModal, getNoteId } = props;
  const { handleSubmit } = useForm();
  const { token } = useToken();
  const [note, setNote] = useState({
    image: '',
    title: '',
    text: '',
    plant: ''
  });
  const [myPlants, setMyPlants] = useState([]);
  const [chosenPlant, setChosenPlant] = useState('');
  const myId = JSON.parse(atob(token.split('.')[1])).id;

  useEffect(() => {
    async function fetchMyPlants() {
      let myPlants = [];

      await fetch(`${Database.URL}/user/${myId}/plants`,
        {
          headers:
        {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
        }, {})
        .then((res) => res.json())
        .then((json) => {
          myPlants = json;
        });
      setMyPlants(myPlants);
    }
    fetchMyPlants();
  }, []);

  const myPlantsNames = myPlants.map((plant) => plant.name);

  const updateField = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  const editNote = async (note1) => fetch(`${Database.URL}/user/${myId}/notes/${getNoteId}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(note1)
  }).then((data) => {
    if (data.status === 200) {
      window.location.reload();
    }
    return data.json();
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    note.plant = chosenPlant._id;
    editNote(note);
  };

  const handleSelectChange = (title, value) => {
    const choosenPlant1 = myPlants.filter((plant) => `${plant.name}` === value);
    setChosenPlant(...choosenPlant1);
    console.log(chosenPlant._id);
  };

  useEffect(() => {
    fetch(`${Database.URL}/user/${myId}/notes/${getNoteId}`, {
      headers: {
        'Content-Type': 'application/',
        Authorization: `Bearer ${token}`
      }
    }, {})
      .then(
        (json) => setNote({
          image: json.image,
          title: json.title,
          text: json.text,
          plant: json.plant
        })
      );
  });

  return (
    <>
      <div
        className={show ? overlay : hide}
        onClick={closeModal}
        onKeyDown={closeModal}
        role="button"
        tabIndex="0"
      />
      <div className={show ? modal : hide}>
        <button onClick={closeModal}>
          <img src={closeSquare} alt="close" />
        </button>
        <div className={form}>
          <Text text="Edit your note" fontsize="1.8rem" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                title="Title"
                className={input}
                placeholder={note.title}
                onChange={updateField}
              />
            </div>
            <div>
              <input
                title="Text"
                className={input}
                placeholder={note.text}
                onChange={updateField}
              />
            </div>
            <div>
              <input
                title="Image"
                className={input}
                placeholder={note.image}
                onChange={updateField}
              />
            </div>
            <div>
              <Select
                title="Which plant?"
                values={myPlantsNames}
                cb={handleSelectChange}
                value={note.plant}
              />
            </div>
            <div>
              <button type="submit" className={button}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

ModalEditNote.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  getNoteId: PropTypes.number.isRequired
};

export default ModalEditNote;
