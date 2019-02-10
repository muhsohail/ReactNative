import { createStore, combineReducers } from 'redux';
import ageReducer from './reducers/ageReducer';

const rootReducer = combineReducers({
  ageReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;