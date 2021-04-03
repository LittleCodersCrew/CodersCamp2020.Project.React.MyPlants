import React from 'react';
import { wrapper, canal } from './Canals.module.scss';

const Canals = () => (
  <div className={wrapper}>
    <button className={canal}>Main chat</button>
    <button className={canal}>Trade your plants</button>
  </div>
);

export default Canals;
