import { combineReducers } from 'redux';
import counter from './counter';
import someString from './someString';

const rootReducer = combineReducers({
  someString,
  counter
});

export default rootReducer;
