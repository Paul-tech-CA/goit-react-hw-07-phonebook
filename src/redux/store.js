// import { createStore } from 'redux';
// import { composeWithDewTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== 'production',
});

export default store;
