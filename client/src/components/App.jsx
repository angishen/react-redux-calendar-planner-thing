import React, { Component } from 'react';
import './App.css';

import CalendarMonth from './Calendar/CalendarMonth';
import ScheduleGrid from './DailySchedule/ScheduleGrid';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <CalendarMonth />
          {/*<ScheduleGrid />*/}
        </div>
        <a href="/auth/google">Sign In With Google</a>
      </div>
    );
  }
}
