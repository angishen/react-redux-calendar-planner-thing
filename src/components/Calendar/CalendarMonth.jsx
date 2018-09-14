import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCalendarMonthWeeks from '../../utils/getCalendarMonthWeeks';

import CalendarDay from './CalendarDay';
import CalendarWeek from './CalendarWeek';

import { prevMonth, nextMonth } from '../../actions/index';

import './style.css';

class CalendarMonth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: moment()
    };
  }

  // huzzahhhh this works
  componentWillReceiveProps(nextProps) {
    this.setState({ currentMonth: nextProps.month });
  }

  renderCalendarDay(props) {
    return <CalendarDay {...props} />;
  }

  renderCalendarGrid() {
    let { currentMonth } = this.state;
    let weeks = getCalendarMonthWeeks(currentMonth);
    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    return (
      <table>
        <tbody>
          <tr>
            {weekdays.map((day, i) => (
              <td key={i}>{day}</td>
            ))}
          </tr>
          {weeks.map((week, i) => (
            <CalendarWeek key={i}>
              {week.map((day, dayOfWeek) =>
                this.renderCalendarDay({
                  key: dayOfWeek,
                  day: day
                })
              )}
            </CalendarWeek>
          ))}
        </tbody>
      </table>
    );
  }

  handlePrevMonthClick = () => {
    this.props.prevMonth(this.state.currentMonth);
  };

  handleNextMonthClick = () => {
    this.props.nextMonth(this.state.currentMonth);
  };

  render() {
    return (
      <div className="calendar-container">
        <div className="calendar-contents">
          <div className="calendar-header">
            <span>
              <button onClick={this.handlePrevMonthClick}>Prev</button>
              {this.state.currentMonth.format('MMMM YYYY')}
              <button onClick={this.handleNextMonthClick}>Next</button>
            </span>
          </div>
          <div className="calendar-grid">{this.renderCalendarGrid()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ month }) {
  return { month };
}

export default connect(
  mapStateToProps,
  { prevMonth, nextMonth }
)(CalendarMonth);
