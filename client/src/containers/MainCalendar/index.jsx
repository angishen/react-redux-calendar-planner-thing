import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import CalendarMonth from '../../components/CalendarMonth/index';

import { selectCalendarDate } from '../../actions/index';

import { ThemeProvider } from 'styled-components';
import { mainCalendarTheme } from '../../themes/calendarThemes';

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

  handleDateClick = date => {
    if (date) this.props.selectDate(date);
  };

  render() {
    return (
      <ThemeProvider theme={mainCalendarTheme}>
        <CalendarMonth
          currentDateAndHour={this.state.currentDateAndHour}
          handleDateClick={this.handleDateClick}
          selectedDate={this.props.selectedDate}
        />
      </ThemeProvider>
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
