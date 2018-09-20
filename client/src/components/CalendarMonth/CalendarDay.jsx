import React, { Component } from 'react';
import { isSameDate } from '../../utils/dateUtils';
import styled from 'styled-components';

import './style.css';

const StyledCalendarDay = styled.td`
  border-radius: ${props => props.theme.border.radius}
`;

export default class CalendarDay extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: false };
  }

  // returnFormattedDate(date) {
  //   return `date: ${date ? date.format('MM-DD') : 'null'}`;
  // }

  componentWillReceiveProps(nextProps) {
    isSameDate(nextProps.date, nextProps.selectedDate)
      ? this.setState({ selected: true })
      : this.setState({ selected: false });
  }

  handleDayClick = () => {
    this.props.handleDayClick(this.props.date);
  };

  render() {
    return (
      <StyledCalendarDay
        className={`calendar-day
          ${this.state.selected ? 'selected' : ''}
          ${this.props.date === null ? 'disabled' : ''}`}
        onClick={this.handleDayClick}
      >
        {this.props.date ? this.props.date.format('D') : ''}
      </StyledCalendarDay>
    );
  }
}
