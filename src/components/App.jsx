import React, { Component } from 'react';

import CalendarMonth from './CalendarMonth';

export default class App extends Component {
  render() {
    return (
      <div>
        Calendar App!
        <CalendarMonth />
      </div>
    );
  }
}