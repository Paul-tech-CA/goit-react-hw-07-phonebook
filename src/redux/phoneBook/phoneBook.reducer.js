import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
  // addNumber,
  // deleteNumber,
  filteredNumber,
  fetchNumbersRequested,
  fetchNumbersSuccess,
  fetchNumbersFailure,
  addNumberRequested,
  addNumberSuccess,
  addNumberFailure,
  removeNumberRequested,
  removeNumberSuccess,
  removeNumberFailure,
} from './phoneBook.actions';

const loading = createReducer(false, {
  [fetchNumbersRequested]: () => true,
  [fetchNumbersSuccess]: () => false,
  [fetchNumbersFailure]: () => false,
  [addNumberRequested]: () => true,
  [addNumberSuccess]: () => false,
  [addNumberFailure]: () => false,
  [removeNumberRequested]: () => true,
  [removeNumberSuccess]: () => false,
  [removeNumberFailure]: () => false,
});

const numberReducer = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],

  {
    // [addNumber]: (state, action) => [...state, action.payload],
    [fetchNumbersSuccess]: (_, { payload }) => payload,
    [addNumberSuccess]: (state, { payload }) => [...state, payload],
    [removeNumberSuccess]: (state, { payload }) => {
      const index = state.findIndex(({ id }) => id === Number(payload));
      // return state.filter(item => item.id !== payload)
      return [...state.slice(0, index), ...state.slice(index + 1)];
    },
  },
);

const handleError = (_, {payload}) => payload.response.data;
const clearError = () => null;

const error = createReducer(null, {
  [fetchNumbersRequested]: clearError,
    [fetchNumbersFailure]: handleError,
  [addNumberRequested]: clearError,
  [addNumberFailure]: handleError,
  [removeNumberRequested]: clearError,
  [removeNumberFailure]: handleError
});

const filterReducer = createReducer('', {
  [filteredNumber]: (_, action) => action.payload,
});

const phoneBookReducer = combineReducers({
  loading,
  contactList: numberReducer,
  error,
  filter: filterReducer,
});

export default phoneBookReducer;
