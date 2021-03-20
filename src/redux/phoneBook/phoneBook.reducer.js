import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
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
  [],

  {
    [fetchNumbersSuccess]: (_, { payload }) => payload,

    [addNumberSuccess]: (state, { payload }) => [...state, payload],
    [removeNumberSuccess]: (state, { payload }) => {
      const index = state.findIndex(({ id }) => id === Number(payload));
      // return state.filter(item => item.id !== payload)
      return [...state.slice(0, index), ...state.slice(index + 1)];
    },
  },
);

const handleError = (_, { payload }) => payload.response.data;
const clearError = () => null;

const error = createReducer(null, {
  [fetchNumbersRequested]: clearError,
  [fetchNumbersFailure]: handleError,
  [addNumberRequested]: clearError,
  [addNumberFailure]: handleError,
  [removeNumberRequested]: clearError,
  [removeNumberFailure]: handleError,
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
