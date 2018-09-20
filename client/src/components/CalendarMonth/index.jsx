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
  :hover {
    color: ${props => props.theme.color.hoverText},
    background-color: ${props => props.theme.color.hoverBg}
  }
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
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <table>
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
      </table>
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
      <StyledCalendarContainer className="calendar-container">
        <div className="calendar-contents">
          <div className="calendar-header">
            <div className="calendar-date-heading">
              <div className="heading-month">
                {this.state.selectedMonth.format('MMM')}
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
              </div>
            </div>
          </div>
          <div className="calendar-grid">{this.renderCalendarGrid()}</div>
        </div>
      </StyledCalendarContainer>
    );
  }
}
