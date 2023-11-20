import React from 'react';

export const Filter = ({ onUpdateFilter }) => {
  const handleChange = (evt) => {
    onUpdateFilter(evt.target.value);
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChange} />
    </>
  );
};
