import { SELECT_PREV_MONTH, SELECT_NEXT_MONTH } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_PREV_MONTH:
      return action.payload;
    case SELECT_NEXT_MONTH:
      return action.payload;
    default:
      return state;
  }
}
