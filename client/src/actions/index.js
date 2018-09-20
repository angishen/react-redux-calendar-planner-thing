export const SELECT_CALENDAR_DATE = 'select_calendar_date';
export const SELECT_DATE_PICKER_DATE = 'select_date_picker_date';

export function selectCalendarDate(date) {
  return {
    type: SELECT_CALENDAR_DATE,
    payload: date
  };
}

export function selectDatePickerDate(date) {
  return {
    type: SELECT_DATE_PICKER_DATE,
    payload: date
  };
}
