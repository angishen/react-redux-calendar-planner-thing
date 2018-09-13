import { combineReducers } from 'redux';

import testReducer from './reducerTest';

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
