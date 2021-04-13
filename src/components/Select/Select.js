/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import PropTypes, { string } from 'prop-types';
import { select, selectWrapper } from './Select.module.scss';

const Select = ({ title, values, cb, height, fontSize }) => {
  const handleChange = (e) => {
    cb(title, e.target.value);
  };

  return (
    <div className={selectWrapper}>
      <select defaultValue="default" placeholder={title} className={select} name={title} id={title} onChange={handleChange} style={{ height, fontSize }}>
        <option value="default" disabled hidden>{title}</option>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.defaultProps = { title: '', values: [], cb: () => {}, height: '40px', fontSize: '1.125rem' };
Select.propTypes = {
  title: PropTypes.string,
  values: PropTypes.arrayOf(string),
  cb: PropTypes.func,
  height: PropTypes.string,
  fontSize: PropTypes.string
};

export default Select;
