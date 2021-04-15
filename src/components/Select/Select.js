import React from 'react';
import PropTypes, { string } from 'prop-types';
import { select, selectWrapper } from './Select.module.scss';

const Select = ({ title, values, cb, width, height, fontsize }) => {
  const handleChange = (e) => {
    cb(title, e.target.value);
  };

  return (
    <div style={{ width }} className={selectWrapper}>
      <select defaultValue="default" placeholder={title} className={select} name={title} id={title} onChange={handleChange} style={{ height, fontsize }}>
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

Select.defaultProps = { title: '', values: [], cb: () => {}, width: 'auto', height: '40px', fontsize: '1.125rem' };
Select.propTypes = {
  title: PropTypes.string,
  values: PropTypes.arrayOf(string),
  cb: PropTypes.func,
  height: PropTypes.string,
  fontsize: PropTypes.string,
  width: PropTypes.string
};

export default Select;
