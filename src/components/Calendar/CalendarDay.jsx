import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isSameDate } from '../../utils/dateUtils';

import { selectDate } from '../../actions';

import './style.css';

class CalendarDay extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: false };
  }

  // returnFormattedDate(date) {
  //   return `date: ${date ? date.format('MM-DD') : 'null'}`;
  // }

  componentWillReceiveProps(nextProps) {
    isSameDate(nextProps.date, nextProps.selectedDate)
      ? this.setState({ selected: true })
      : this.setState({ selected: false });
  }

  handleDayClick = () => {
    if (this.props.date) this.props.selectDate(this.props.date);
  };

  render() {
    return (
      <td
        className={`calendar-day
          ${this.state.selected ? 'selected' : ''}
          ${this.props.date === null ? 'disabled' : ''}`}
        onClick={this.handleDayClick}
      >
        {this.props.date ? this.props.date.format('D') : ''}
      </td>
    );
  }
}

function mapStateToProps({ selectedDate }) {
  return { selectedDate };
}

export default connect(
  mapStateToProps,
  { selectDate }
)(CalendarDay);
