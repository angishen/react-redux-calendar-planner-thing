import { PREV_MONTH, NEXT_MONTH } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case PREV_MONTH:
      return action.payload;
    case NEXT_MONTH:
      return action.payload;
    default:
      return state;
  }
}
