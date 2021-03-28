import React from 'react';
import PropTypes from 'prop-types';
import { button } from './Button.module.scss';

const Button = ({ type, text, onClick }) => (
  <button className={button} type={type} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
Button.defaultProps = { type: 'button' };
export default Button;
