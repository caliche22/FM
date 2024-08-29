import React, { useState } from 'react';
import '../styles/CountryForm.css'

const CountryForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter country"
      />
      <button type="submit">Consultar</button>
    </form>
  );
};

export default CountryForm;
