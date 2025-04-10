import { combineReducers, createStore } from 'redux';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

const store = createStore(rootReducer);

export default store;
