import React from 'react';
import PropTypes from 'prop-types';
import { input } from './Input.module.scss';

const Input = ({ text, height }) => (
  <input
    name="input"
    className={input}
    placeholder={text}
    type="text"
    data-testid="input"
    style={{ height }}
  />
);

Input.defaultProps = { text: 'text' };
Input.propTypes = {
  text: PropTypes.string,
  height: PropTypes.string.isRequired
};

export default Input;
