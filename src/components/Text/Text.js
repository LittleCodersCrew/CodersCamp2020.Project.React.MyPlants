import React from 'react';
import PropTypes from 'prop-types';
import { paragraph } from './Text.module.scss';

const Text = ({ text, fontsize }) => (
  <p className={paragraph} style={{ fontSize: fontsize }}>{text}</p>
);

Text.propTypes = {
  text: PropTypes.string,
  fontsize: PropTypes.string
};

Text.defaultProps = {
  text: 'Welcome to My Plants',
  fontsize: '4.6vh'
};

export default Text;
