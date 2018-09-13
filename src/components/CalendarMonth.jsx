import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCalendarMonthWeeks from '../utils/getCalendarMonthWeeks';

import CalendarDay from './CalendarDay';
import CalendarWeek from './CalendarWeek';

class CalendarMonth extends Component {
  constructor(props) {
    super(props);

    this.state = { weeks: getCalendarMonthWeeks(moment()) };
  }

  renderCalendarDay(props) {
    return <CalendarDay {...props} />;
  }

  render() {
    const { weeks } = this.state;
    return (
      <div>
        <table>
          <tbody>
            {weeks.map((week, i) => (
              <CalendarWeek key={i}>
                {week.map((day, dayOfWeek) =>
                  this.renderCalendarDay({
                    key: dayOfWeek,
                    day: day.format('D')
                  }))}
              </CalendarWeek>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CalendarMonth;
