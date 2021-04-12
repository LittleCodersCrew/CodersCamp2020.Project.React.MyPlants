/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Select from '../Select';
import Button from '../Button';
import useToken from '../../hooks/useToken/useToken';
import Database from '../../database';
import closeSquare from '../../assets/icons/Close Square.png';
import { hide, overlay, modal, form, input, button, tick } from './ModalEditNote.module.scss';

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

  const updateField = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

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

  const handleSelectChange = (title, value) => {
    const choosenPlant1 = myPlants.filter((plant) => `${plant.name}` === value);
    setChosenPlant(...choosenPlant1);
    console.log(chosenPlant._id);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    note.plant = chosenPlant._id;
    const response = await editNote(note);
    console.log(response);
  };

  useEffect(() => {
    fetch(`${Database.URL}/user/${myId}/notes/${noteId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }, {})
      .then((data) => data.json())
      .then(
        (json) => setNote({
          image: json.image,
          title: json.title,
          text: json.text,
          plant: json.plant,
          private: json.private
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
          <form onSubmit={onSubmit} method="PUT" id="editNote">
            <div className={tick}>
              <input type="checkbox" id="private" name="private" value="true" onChange={(e) => setNote({ ...note, private: e.target.checked })} />
              <label htmlFor="private"> Private? </label>
            </div>
            <div>
              <input
                text="Title"
                name="Title"
                className={input}
                placeholder={note.title}
                onChange={updateField}
              />
            </div>
            <div>
              <input
                title="Text"
                name="Text"
                className={input}
                placeholder={note.text}
                onChange={updateField}
              />
            </div>
            <div>
              <input
                title="Image"
                name="Image"
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
              <Button type="submit" text="Save" />
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
