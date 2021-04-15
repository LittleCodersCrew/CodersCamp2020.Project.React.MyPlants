import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Select from '../Select';
import useToken from '../../hooks/useToken/useToken';
import Database from '../../database';
import closeSquare from '../../assets/icons/CloseSquare.png';
import { hide, overlay, modal, form, input, button } from './ModalEditNote.module.scss';

const ModalEditNote = (props) => {
  const { show, closeModal, noteId } = props;
  const { token } = useToken();
  const [note, setNote] = useState({
    image: '',
    title: '',
    text: '',
    plant: '',
    private: false
  });
  const [myPlants, setMyPlants] = useState([]);
  const [chosenPlant, setChosenPlant] = useState('');
  const myId = JSON.parse(atob(token.split('.')[1])).id;

  const [newNote, setNewNote] = useState('');

  const updateField = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
      private: false
    });
  };

  useEffect(() => {
    async function fetchMyPlants() {
      let myPlantsFetched = [];

      await fetch(
        `${Database.URL}/user/${myId}/plants`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        },
        {}
      )
        .then((res) => res.json())
        .then((json) => {
          myPlantsFetched = json;
        });
      setMyPlants(myPlantsFetched);
    }
    fetchMyPlants();
  }, [myId, token]);

  const myPlantsNames = myPlants.map((plant) => plant.name);

  const editNote = async (note1) => fetch(`${Database.URL}/user/${myId}/notes/${noteId}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(note1)
  }).then((data) => {
    if (data.status === 200) {
      window.location.reload();
    }
    return data.json();
  });

  const handleSelectChange = (_title, value) => {
    const choosenPlant1 = myPlants.filter((plant) => `${plant.name}` === value);
    setChosenPlant(...choosenPlant1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    newNote.plant = chosenPlant._id;
    editNote(newNote);
  };

  useEffect(() => {
    fetch(
      `${Database.URL}/user/${myId}/notes/${noteId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }, {}
    )
      .then((data) => data.json())
      .then((json) => setNote({
        image: json.image,
        title: json.title,
        text: json.text,
        plant: json.plant
      }));
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
          <form method="PUT">
            <div>
              <input
                text="Title"
                name="title"
                className={input}
                placeholder={note.title}
                onChange={updateField}
              />
            </div>
            <div>
              <input
                title="Text"
                name="text"
                className={input}
                placeholder={note.text}
                onChange={updateField}
              />
            </div>
            <div>
              <input
                title="Image"
                name="image"
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
                placeholder={note.plant}
                onChange={updateField}
              />
            </div>
            <div>
              <button type="submit" className={button} onClick={onSubmit}>
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
  noteId: PropTypes.string.isRequired
};

export default ModalEditNote;
