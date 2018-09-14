import moment from 'moment';

export default function getDailyTimeBlocks(day, firstHour = 6, lastHour = 22) {
  if (!moment.isMoment(day) || !day.isValid()) {
    throw new TypeError('`day` must be a valid moment object');
  }
  if (firstHour < 0 || firstHour > 23) {
    throw new TypeError('`firstHour` must be an integer between 0 and 23');
  }
  if (lastHour < 0 || lastHour > 23) {
    throw new TypeError('`lastHour` must be an integer between 0 and 23');
  }

  let timeBlocks = [];

  for (let i = firstHour; i < lastHour + 1; i += 0.5) {
    if (i % 1 === 0) {
      var timeBlock = day
        .clone()
        .startOf('hour')
        .hour(i);
    } else {
      timeBlock = day
        .clone()
        .startOf('hour')
        .hour(i)
        .minute(30);
    }
    timeBlocks.push(timeBlock);
  }

  return timeBlocks;
}
