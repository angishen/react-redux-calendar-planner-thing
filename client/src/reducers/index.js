import { combineReducers } from 'redux';
import calendarDateReducer from './reducerCalendarDate';
import datePickerDateReducer from './reducerDatePickerDate';

const rootReducer = combineReducers({
  selectedCalendarDate: calendarDateReducer,
  selectedDatePickerDate: datePickerDateReducer
});

export default rootReducer;
