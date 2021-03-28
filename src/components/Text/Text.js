import React from 'react';
import PropTypes from 'prop-types';
import { divContainer, paragraph } from './Text.module.scss';

const Text = ({ text }) => (
  <div className={divContainer}>
    <p className={paragraph}>{text}</p>
  </div>
);

Text.propTypes = { text: PropTypes.string };
Text.defaultProps = { text: 'Welcome to My Plants' };

export default Text;
