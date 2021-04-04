import React from 'react';
import PropTypes from 'prop-types';
import { input } from './TextArea.module.scss';

const TextArea = ({ text, id, name, onChange, height }) => (
  <textarea
    className={input}
    placeholder={text}
    id={id}
    type="text"
    name={name}
    onChange={onChange}
    style={{ height }}
  />
);

TextArea.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  height: PropTypes.string.isRequired
};

export default TextArea;
