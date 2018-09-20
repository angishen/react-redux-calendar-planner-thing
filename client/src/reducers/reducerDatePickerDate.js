import { SELECT_DATE_PICKER_DATE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_DATE_PICKER_DATE:
      return action.payload;
    default:
      return state;
  }
}
