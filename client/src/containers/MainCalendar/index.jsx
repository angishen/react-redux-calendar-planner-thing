import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import CalendarMonth from '../../components/CalendarMonth/index';

import { selectCalendarDate } from '../../actions/index';

class MainCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDateAndHour: moment().startOf('hour')
    };
  }

  componentDidMount() {
    this.props.selectDate(this.state.currentDateAndHour);
  }

  handleDayClick = date => {
    if (date) this.props.selectDate(date);
  };

  render() {
    return (
      <div>
        <CalendarMonth
          currentDateAndHour={this.state.currentDateAndHour}
          handleDayClick={this.handleDayClick}
          selectedDate={this.props.selectedDate}
        />
      </div>
    );
  }
}

function mapStateToProps({ selectedCalendarDate }) {
  return { selectedDate: selectedCalendarDate };
}

export default connect(
  mapStateToProps,
  { selectDate: selectCalendarDate }
)(MainCalendar);
