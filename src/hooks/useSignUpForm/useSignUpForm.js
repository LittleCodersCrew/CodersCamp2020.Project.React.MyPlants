// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    // eslint-disable-next-line no-shadow
    setInputs((inputs) => ({ ...inputs, [event.target.name]: [event.target.value] }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useSignUpForm;
