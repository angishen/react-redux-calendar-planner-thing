export const SELECT_PREV_MONTH = 'select_prev_month';
export const SELECT_NEXT_MONTH = 'next_month';
export const SELECT_DATE = 'select_date';

export function selectPrevMonth(month) {
  const prevMonth = month.clone().subtract(1, 'month');

  return {
    type: SELECT_PREV_MONTH,
    payload: prevMonth
  };
}

export function selectNextMonth(month) {
  const nextMonth = month.clone().add(1, 'month');

  return {
    type: SELECT_NEXT_MONTH,
    payload: nextMonth
  };
}

export function selectDate(date) {
  return {
    type: SELECT_DATE,
    payload: date
  };
}
