import React from 'react';
import PropTypes from 'prop-types';
import { button } from './Button.module.scss';

const Button = ({ type, text }) => (
  <button className={button} type={type}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  text: PropTypes.string.isRequired
};
Button.defaultProps = { type: 'button' };
export default Button;
