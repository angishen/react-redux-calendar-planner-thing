import moment from 'moment';

const WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];

// returns a nested array of a given month divided into weeks
export default function getCalendarMonthWeeks(
  month,
  enableOutsideDays = false,
  firstDayOfWeek = moment.localeData().firstDayOfWeek()
) {
  if (!moment.isMoment(month) || !month.isValid()) {
    throw new TypeError('`month` must be a valid moment object');
  }
  if (WEEKDAYS.indexOf(firstDayOfWeek) === -1) {
    throw new TypeError('`firstDayOfWeek` must be an integer between 0 and 6');
  }
  const firstOfMonth = month
    .clone()
    .startOf('month')
    .hour(12);
  const lastOfMonth = month
    .clone()
    .endOf('month')
    .hour(12);

  // calculate the exact first and last days to fill the entire grid
  // including days outside of the month
  const prevMonthDaysCount = (firstOfMonth.day() + 7 - firstDayOfWeek) % 7;
  const nextMonthDaysCount = (firstDayOfWeek + 6 - lastOfMonth.day()) % 7;
  const firstDay = firstOfMonth.clone().subtract(prevMonthDaysCount, 'day');
  const lastDay = lastOfMonth.clone().add(nextMonthDaysCount, 'day');
  const totalDays = lastDay.diff(firstDay, 'days') + 1;

  const currentDay = firstDay.clone();
  const weeksInMonth = [];

  for (let i = 0; i < totalDays; i += 1) {
    if (i % 7 === 0) {
      weeksInMonth.push([]);
    }

    let day = null;
    if ((i >= prevMonthDaysCount && i < totalDays - nextMonthDaysCount) || enableOutsideDays) {
      day = currentDay.clone();
    }

    weeksInMonth[weeksInMonth.length - 1].push(day);

    currentDay.add(1, 'day');
  }
  return weeksInMonth;
}
