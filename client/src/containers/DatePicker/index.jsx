import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { selectDatePickerDate } from '../../actions';
import CalendarMonth from '../../components/CalendarMonth';

import { ThemeProvider } from 'styled-components';
import {datePickerTheme} from "../../themes/calendarThemes";

class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = { currentDateAndHour: moment().startOf('hour') };
  }

  componentDidMount() {
    this.props.selectDate(this.state.currentDateAndHour);
  }

  handleDateClick = date => {
    if (date) this.props.selectDate(date);
  };

  render() {
    const weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
      <div>
        <ThemeProvider theme={datePickerTheme}>
          <CalendarMonth
            currentDateAndHour={this.state.currentDateAndHour}
            handleDateClick={this.handleDateClick}
            selectedDate={this.props.selectedDate}
            monthFormat={'MMMM'}
            width="175px"
            height="250px"
            weekdayLabels={weekdayLabels}
          />
        </ThemeProvider>
      </div>
    );
  }
}

function mapStateToProps({ selectedDatePickerDate }) {
  return { selectedDate: selectedDatePickerDate };
}

export default connect(
  mapStateToProps,
  { selectDate: selectDatePickerDate }
)(DatePicker);
