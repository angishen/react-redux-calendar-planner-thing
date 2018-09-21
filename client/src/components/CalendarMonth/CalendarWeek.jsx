import React from 'react';
import styled from 'styled-components';

export default function CalendarWeek({ children }) {
  return <tr className="calendar-week">{children}</tr>;
}
