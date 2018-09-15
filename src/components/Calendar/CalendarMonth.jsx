import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCalendarMonthWeeks from '../../utils/getCalendarMonthWeeks';

import CalendarDay from './CalendarDay';
import CalendarWeek from './CalendarWeek';

import { selectPrevMonth, selectNextMonth, selectDate } from '../../actions/index';

import './style.css';

class CalendarMonth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMoment: moment().startOf('hour')
    };
  }

  componentDidMount() {
    this.props.selectDate(this.state.currentMoment);
  }

  // huzzahhhh this works
  componentWillReceiveProps(nextProps) {
    this.setState({ currentMoment: nextProps.month });
  }

  renderCalendarDay(props) {
    return <CalendarDay {...props} />;
  }

  renderCalendarGrid() {
    let { currentMoment } = this.state;
    let weeks = getCalendarMonthWeeks(currentMoment);
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
                })
              )}
            </CalendarWeek>
          ))}
        </tbody>
      </table>
    );
  }

  handlePrevMonthClick = () => {
    this.props.selectPrevMonth(this.state.currentMoment);
  };

  handleNextMonthClick = () => {
    this.props.selectNextMonth(this.state.currentMoment);
  };

  render() {
    return (
      <div className="calendar-container">
        <div className="calendar-contents">
          <div className="calendar-header">
            <div className="calendar-date-heading">
              <div className="heading-month">
                {this.state.currentMoment.format('MMM')}
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
                  {this.state.currentMoment.format('YYYY')}
                </div>
              </div>
            </div>
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
  { selectPrevMonth, selectNextMonth, selectDate }
)(CalendarMonth);
