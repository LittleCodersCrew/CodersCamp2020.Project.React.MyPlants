import React from 'react';
import PropTypes from 'prop-types';
import { input } from './Input.module.scss';

const Input = ({ text }) => (
  <input
    name="plantName"
    className={input}
    placeholder={text}
    type="text"
    data-testid="input"
  />
);

Input.defaultProps = { text: '' };
Input.propTypes = { text: PropTypes.string };

export default Input;
