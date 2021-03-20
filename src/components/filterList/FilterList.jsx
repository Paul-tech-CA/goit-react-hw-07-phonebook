import React from 'react';
import style from '../App.module.css';
import { connect } from 'react-redux';
import { filteredNumber } from '../../redux/phoneBook/phoneBook.actions';
import { getFilter } from '../../redux/phoneBook/phoneBook.selector';

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

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = {
  onFilterHandleChange: filteredNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
