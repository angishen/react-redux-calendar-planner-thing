import React, { Component } from 'react';
import '../App.css';

import CalendarMonth from './Calendar/CalendarMonth';
import ScheduleGrid from './DailySchedule/ScheduleGrid';

export default class App extends Component {
  render() {
    return (
      <div>
        <CalendarMonth />
        <ScheduleGrid />
      </div>
    );
  }
}
