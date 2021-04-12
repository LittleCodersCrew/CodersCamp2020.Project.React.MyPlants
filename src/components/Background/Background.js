/* eslint-disable react/prop-types */
import React from 'react';
import { background, wrapper } from './Background.module.scss';

const Background = ({ children }) => (
  <div className={wrapper}>
    {children}
    <div className={background} />
  </div>
);

export default Background;
