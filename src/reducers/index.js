import { combineReducers } from 'redux';

import monthReducer from './reducerMonth';

const rootReducer = combineReducers({
  month: monthReducer
});

export default rootReducer;
