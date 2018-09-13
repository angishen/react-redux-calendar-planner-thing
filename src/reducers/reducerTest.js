import { TEST_ACTION } from '../actions';

export default function(state = '', action) {
  switch (action.type) {
    case TEST_ACTION:
      return action.payload;
    default:
      return state;
  }
}
