import axios from 'axios';
import {
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

axios.defaults.baseURL = 'http://localhost:3004';

const fetchNumbers = () => async dispatch => {
  dispatch(fetchNumbersRequested());
  try {
    const { data } = await axios.get('/numbers');
    dispatch(fetchNumbersSuccess(data));
  } catch (error) {
    dispatch(fetchNumbersFailure(error));
  }
};

const deleteNumber = id => async dispatch => {
    dispatch(removeNumberRequested());
    try {
        await axios.delete(`/numbers/${id}`);
        dispatch(removeNumberSuccess(id));
    } catch (error) {
        dispatch(removeNumberFailure(error));
    }
};

const addNumber = contact => async dispatch => {
    dispatch(addNumberRequested());
    try {
       const {data} = await axios.post(`/contacts`, {contact});
       dispatch(addNumberSuccess(data)); 
    } catch (error) {
        dispatch(addNumberFailure(error));
    }
};

export {fetchNumbers, deleteNumber, addNumber};