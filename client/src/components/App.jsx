import React, { Component } from 'react';
import './App.css';

import MainCalendar from '../containers/MainCalendar'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <MainCalendar />
          {/*<ScheduleGrid />*/}
        </div>
        <a href="/auth/google">Sign In With Google</a>
      </div>
    );
  }
}
