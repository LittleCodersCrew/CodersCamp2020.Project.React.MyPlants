import React from 'react';
import PropTypes from 'prop-types';
import { input } from './Input.module.scss';

const Input = ({ text, cb }) => {
  const handleChange = (e) => {
    cb(text, e.target.value);
  };

  return (
    <input
      name="input"
      className={input}
      placeholder={text}
      type="text"
      data-testid="input"
      onChange={handleChange}
    />
  );
};

Input.defaultProps = { text: 'text', cb: () => {} };
Input.propTypes = { text: PropTypes.string, cb: PropTypes.func };

export default Input;
