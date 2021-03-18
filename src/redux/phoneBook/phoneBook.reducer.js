import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addNumber, deleteNumber, filteredNumber } from './phoneBook.actions';

const numberReducer = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],

  {
    [addNumber]: (state, action) => [...state, action.payload],
    [deleteNumber]: (state, action) => [
      ...state.filter(item => item.id !== action.payload),
    ],
  },
);

const filterReducer = createReducer('', {
  [filteredNumber]: (_, action) => action.payload,
});

const phoneBookReducer = combineReducers({
  contactList: numberReducer,
  filter: filterReducer,
});

export default phoneBookReducer;
