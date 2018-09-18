export const SELECT_CALENDAR_DATE = 'select_calendar_date';

export function selectCalendarDate(date) {
  return {
    type: SELECT_CALENDAR_DATE,
    payload: date
  };
}
