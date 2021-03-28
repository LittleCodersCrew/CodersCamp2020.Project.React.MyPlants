import React from 'react';
import PropTypes from 'prop-types';
import { paragraph } from './Text.module.scss';

const Text = ({ text, fontsize }) => (
  <p className={paragraph} style={{ fontSize: fontsize }}>{text}</p>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
  fontsize: PropTypes.string.isRequired
};

export default Text;
