import React from 'react';
import style from '../App.module.css';

const FilterList = ({ filter, onFilterHandleChange }) => {
  const onHandleChange = event => {
    onFilterHandleChange(event.target.value);
  };
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        className={style.input}
        onChange={onHandleChange}
        value={filter}
      />
    </div>
  );
};

export default FilterList;
