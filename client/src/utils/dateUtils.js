import moment from 'moment';

export function isSameDate(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return (
    a.date() === b.date() && a.month() === b.month() && a.year() === b.year()
  );
}
