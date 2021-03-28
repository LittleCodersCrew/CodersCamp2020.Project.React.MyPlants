import React from 'react';
import PropTypes, { string } from 'prop-types';
import { select, selectWrapper } from './Select.module.scss';

const propTypes = {
  title: PropTypes.string,
  values: PropTypes.arrayOf(string)
};

const defaultProps = { title: '', values: [] };

const Select = ({ title, values }) => (
  <div className={selectWrapper}>
    <select defaultValue="default" className={select} name={title} id={title}>
      <option value="default" disabled hidden>{title}</option>
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  </div>
);

Select.defaultProps = defaultProps;
Select.propTypes = propTypes;

export default Select;
