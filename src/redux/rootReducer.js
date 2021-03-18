import { combineReducers } from 'redux';
import phoneBookReducer from './phoneBook/phoneBook.reducer';

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
});

export default rootReducer;
