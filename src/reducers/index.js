import { combineReducers } from 'redux';

import timeReducer from './reducerTime';

const rootReducer = combineReducers({
  currentTime: timeReducer
});

export default rootReducer;
