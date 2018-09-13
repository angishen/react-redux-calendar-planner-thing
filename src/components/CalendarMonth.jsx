import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCalendarMonthWeeks from '../utils/getCalendarMonthWeeks';

import CalendarDay from './CalendarDay';
import CalendarWeek from './CalendarWeek';

import { prevMonth, nextMonth } from '../actions';

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

  handlePrevMonthClick = () => {
    this.props.prevMonth(this.state.currentMonth);
  };

  handleNextMonthClick = () => {
    this.props.nextMonth(this.state.currentMonth);
  };

  render() {
    let { currentMonth } = this.state;
    let weeks = getCalendarMonthWeeks(currentMonth);

    return (
      <div>
        <div>{this.state.currentMonth.format('MMMM YYYY')}</div>
        <button onClick={this.handlePrevMonthClick}>Prev</button>
        <button onClick={this.handleNextMonthClick}>Next</button>
        <table>
          <tbody>
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
