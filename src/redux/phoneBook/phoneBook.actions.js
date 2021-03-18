import { createAction, nanoid } from '@reduxjs/toolkit';

const addNumber = createAction('number/addNumber', number => ({
  payload: { ...number, id: nanoid() },
}));

const deleteNumber = createAction('number/deleteNumber');

const filteredNumber = createAction('number/filteredNumber');

export { addNumber, deleteNumber, filteredNumber };
