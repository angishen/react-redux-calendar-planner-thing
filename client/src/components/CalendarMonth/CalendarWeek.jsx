import React from 'react';
import styled from 'styled-components';

const StyledWeek = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 15%;
`;

export default function CalendarWeek({ children }) {
  return <StyledWeek>{children}</StyledWeek>;
}
