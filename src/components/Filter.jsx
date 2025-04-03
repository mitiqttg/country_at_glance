import React from 'react';

const Filter = ({ handleFilterCountry }) => {
  return (
    <div className="filter-container">
      <input 
        type="text" 
        className="filterInput"
        placeholder="Search for a country..."
        onChange={handleFilterCountry}
      />
    </div>
  );
};

export default Filter;
