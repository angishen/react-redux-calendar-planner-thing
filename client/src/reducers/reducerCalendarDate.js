import { SELECT_CALENDAR_DATE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_CALENDAR_DATE:
      return action.payload;
    default:
      return state;
  }
}
