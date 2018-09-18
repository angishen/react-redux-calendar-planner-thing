import { combineReducers } from 'redux';
import calendarDateReducer from './reducerCalendarDate';

const rootReducer = combineReducers({
  selectedCalendarDate: calendarDateReducer
});

export default rootReducer;
