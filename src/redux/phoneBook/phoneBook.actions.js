import { createAction, nanoid } from '@reduxjs/toolkit';

const addNumber = createAction('number/addNumber', number => ({
  payload: { ...number, id: nanoid() },
}));

const deleteNumber = createAction('number/deleteNumber');
const filteredNumber = createAction('number/filteredNumber');

//getAll
const fetchNumbersRequested = createAction("number/fetch-numbers-requested");
const fetchNumbersSuccess = createAction("number/fetch-numbers-success");
const fetchNumbersFailure = createAction("number/fetch-numbers-failure");

//add
const addNumberRequested = createAction("number/add-number-requested");
const addNumberSuccess = createAction("number/add-number-success");
const addNumberFailure = createAction("number/add-number-failure");

//remove
const removeNumberRequested = createAction("number/remove-number-requested");
const removeNumberSuccess = createAction("number/remove-number-success");
const removeNumberFailure = createAction("number/remove-number-failure");

export { 
  addNumber, 
  deleteNumber, 
  filteredNumber, 
  fetchNumbersRequested, 
  fetchNumbersSuccess, 
  fetchNumbersFailure, 
  addNumberRequested, 
  addNumberSuccess, 
  addNumberFailure, 
  removeNumberRequested, 
  removeNumberSuccess,
  removeNumberFailure
};
