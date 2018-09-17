import { combineReducers } from 'redux';

import monthReducer from './reducerMonth';
import dateReducer from './reducerDate';

const rootReducer = combineReducers({
  month: monthReducer,
  selectedDate: dateReducer
});

export default rootReducer;
