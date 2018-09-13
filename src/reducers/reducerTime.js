import { FETCH_TIME } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TIME:
      return action.payload;
    default:
      return state;
  }
}
