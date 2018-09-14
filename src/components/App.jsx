import React, { Component } from 'react';
import '../App.css'

import CalendarMonth from './Calendar/CalendarMonth';

export default class App extends Component {
  render() {
    return (
      <div>
        <CalendarMonth />
      </div>
    );
  }
}
