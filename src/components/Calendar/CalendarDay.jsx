import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEquivalent from '../../utils/isEquivalent';

import { selectDate } from '../../actions';

import './style.css';

class CalendarDay extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: false };
  }

  componentWillReceiveProps(nextProps) {
    this.props.day === nextProps.selectedDate
      ? this.setState({ selected: true })
      : this.setState({ selected: false });
  }

  handleDayClick = () => {
    if (this.props.day) this.props.selectDate(this.props.day);
  };

  render() {
    return (
      <td
        className={`calendar-day
          ${this.state.selected ? 'selected' : ''}
          ${this.props.day === null ? 'disabled' : ''}`}
        onClick={this.handleDayClick}
      >
        {this.props.day ? this.props.day.format('D') : ''}
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
