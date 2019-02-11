import { createStore } from 'redux';
import ageReducer from './reducers/ageReducer';

const configureStore = () => {
  return createStore(ageReducer);
}

export default configureStore;