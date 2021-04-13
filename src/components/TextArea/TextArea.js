import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { input } from './TextArea.module.scss';

const TextArea = ({ text, id, name, onChange, clearSignal, width, height }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = '';
  }, [clearSignal]);

  return (
    <textarea
      ref={inputRef}
      className={input}
      placeholder={text}
      id={id}
      type="text"
      name={name}
      onChange={onChange}
      data-testid="textArea"
      style={{ width, height }}
    />
  );
};

TextArea.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  clearSignal: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
};

TextArea.defaultProps = { clearSignal: false, width: '98%', height: '5.5rem' };

export default TextArea;
