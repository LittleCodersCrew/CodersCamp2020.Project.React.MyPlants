import React from 'react';
import PropTypes from 'prop-types';
import { wrapper, canal, open, notOpen } from './Canals.module.scss';

const Canals = ({ name, ifOpen, change }) => {
  const classes = [canal, ifOpen ? open : notOpen];

  return (
    <div className={wrapper}>
      <button className={classes.join(' ')} onClick={change}>{name}</button>
    </div>
  );
};

Canals.propTypes = {
  name: PropTypes.string.isRequired,
  ifOpen: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired
};

export default Canals;
