import React from 'react';
import PropTypes from 'prop-types';
import { divContainer, paragraph } from './Text.module.scss';

const propTypes = { text: PropTypes.string };

const defaultProps = { text: 'Welcome to My Plants' };

const Text = ({ text }) => (
  <div className={divContainer}>
    <p className={paragraph}>{text}</p>
  </div>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
