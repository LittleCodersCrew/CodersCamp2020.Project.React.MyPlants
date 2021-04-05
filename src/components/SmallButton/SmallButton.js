import React from 'react';
import PropTypes from 'prop-types';
import { smallButton } from './SmallButton.module.scss';

const SmallButton = ({ type, text, onClick, fontsize }) => (
  <button className={smallButton} type={type} onClick={onClick} style={{ fontSize: fontsize }}>
    {text}
  </button>
);

SmallButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  fontsize: PropTypes.string.isRequired
};

SmallButton.defaultProps = { type: 'button' };

export default SmallButton;
