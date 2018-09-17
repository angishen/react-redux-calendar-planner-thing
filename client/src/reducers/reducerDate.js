import { SELECT_DATE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_DATE:
      return action.payload;
    default:
      return state;
  }
}
