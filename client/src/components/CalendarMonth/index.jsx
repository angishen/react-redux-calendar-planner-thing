import React, { Component } from 'react';
import getCalendarMonthWeeks from '../../utils/getCalendarMonthWeeks';
import styled from 'styled-components';

import CalendarDay from './CalendarDay';
import CalendarWeek from './CalendarWeek';

import './style.css';

const StyledCalendarContainer = styled.div`
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size.large};
  background-color: ${props => props.theme.color.background};
  width: ${props => props.width}
  height: ${props => props.height}
`;

const StyledCalendarHeader = styled.div`
  font-size: ${props => props.theme.font.size.heading};
  margin-bottom: 6%;
`;

const StyledTable = styled.table`
  width: 100%;
  margin: 0 auto;
  border-spacing: 0px;
`;

export default class CalendarMonth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMonth: this.props.currentDateAndHour.clone().startOf('month')
    };
  }

  renderCalendarDay(props) {
    return <CalendarDay {...props} />;
  }

  renderCalendarGrid() {
    let { selectedMonth } = this.state;
    let weeks = getCalendarMonthWeeks(selectedMonth);
    const weekdays = this.props.weekdayLabels;

    return (
      <StyledTable>
        <tbody>
          <tr className="weekday-labels">
            {weekdays.map((day, i) => (
              <td key={i}>{day}</td>
            ))}
          </tr>
          {weeks.map((week, i) => (
            <CalendarWeek key={i}>
              {week.map((date, dayOfWeek) =>
                this.renderCalendarDay({
                  key: dayOfWeek,
                  date: date,
                  selectedDate: this.props.selectedDate,
                  handleDateClick: this.props.handleDateClick
                })
              )}
            </CalendarWeek>
          ))}
        </tbody>
      </StyledTable>
    );
  }

  handlePrevMonthClick = () => {
    const prevMonth = this.state.selectedMonth.clone().subtract(1, 'month');
    this.setState({ selectedMonth: prevMonth });
  };

  handleNextMonthClick = () => {
    const nextMonth = this.state.selectedMonth.clone().add(1, 'month');
    this.setState({ selectedMonth: nextMonth });
  };

  render() {
    return (
      <StyledCalendarContainer
        width={this.props.width}
        height={this.props.height}
      >
        <div className="calendar-header">
          <div className="calendar-date-heading">
            <StyledCalendarHeader className="heading-month">
              {this.state.selectedMonth.format(this.props.monthFormat)}
              <div className="month-toggler">
                <span className="month-toggler-buttons">
                  <button onClick={this.handlePrevMonthClick}>
                    <i className="fa fa-chevron-left" />
                  </button>
                  <button onClick={this.handleNextMonthClick}>
                    <i className="fa fa-chevron-right" />
                  </button>
                </span>
              </div>
              <div className="heading-year">
                {this.state.selectedMonth.format('YYYY')}
              </div>
            </StyledCalendarHeader>
          </div>
        </div>
        <div className="calendar-grid">{this.renderCalendarGrid()}</div>
      </StyledCalendarContainer>
    );
  }
}
