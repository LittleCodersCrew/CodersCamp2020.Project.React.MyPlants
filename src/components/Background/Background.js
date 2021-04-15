import React from 'react';
import PropTypes from 'prop-types';
import { background, wrapper } from './Background.module.scss';

const Background = ({ children }) => (
  <div className={wrapper}>
    {children}
    <div className={background} />
  </div>
);

Background.propTypes = { children: PropTypes.node.isRequired };

export default Background;
