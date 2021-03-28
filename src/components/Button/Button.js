import React from 'react';
import PropTypes from 'prop-types';
import { button } from './Button.module.scss';

const Button = ({ type, text }) => {
  if (type === 'submit') {
    return (
      <button className={button} type="submit">
        {text}
      </button>
    );
  }

  return (
    <button className={button} type="button">
      {text}
    </button>
  );
};

Button.propTypes = { type: PropTypes.oneOf(['button', 'submit']), text: PropTypes.string };
Button.defaultProps = { type: 'button', text: '' };
export default Button;
