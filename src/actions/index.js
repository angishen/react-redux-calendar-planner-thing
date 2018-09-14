export const PREV_MONTH = 'prev_month';
export const NEXT_MONTH = 'next_month';
export const SELECT_DATE = 'select_date';

export function prevMonth(month) {
  const prevMonth = month.clone().subtract(1, 'month');

  return {
    type: PREV_MONTH,
    payload: prevMonth
  };
}

export function nextMonth(month) {
  const nextMonth = month.clone().add(1, 'month');

  return {
    type: NEXT_MONTH,
    payload: nextMonth
  };
}

export function selectDate(date) {
  return {
    type: SELECT_DATE,
    payload: date
  };
}
