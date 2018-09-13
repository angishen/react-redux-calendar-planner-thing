import React, { Component } from 'react';

export default class CalendarDay extends Component {
  render() {
    return(
      <td>{this.props.day ? this.props.day.format('D') : ''}</td>
    )
  }
}