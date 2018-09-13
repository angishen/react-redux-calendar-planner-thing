import moment from 'moment';

export const FETCH_TIME = 'fetch_time';

export function fetchTime() {
  const currentTime = moment();

  return {
    type: FETCH_TIME,
    payload: currentTime
  };
}
