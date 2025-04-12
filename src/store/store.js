
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import countriesReducer from './countriesReducer';


const rootReducer = combineReducers({
  countries: countriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
