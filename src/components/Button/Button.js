import React from 'react';
import PropTypes from 'prop-types';
import { button } from './Button.module.scss';

const Button = ({ type, text, onClick }) => {
  if (type === 'submit') {
    return (
      <button className={button} type="submit" onClick={onClick}>
        {text}
      </button>
    );
  }

  return (
    <button className={button} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
};
Button.defaultProps = { type: 'button', onClick: () => null };
export default Button;
