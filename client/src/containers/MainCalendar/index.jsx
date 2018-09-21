import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import CalendarMonth from '../../components/CalendarMonth/index';

import { selectCalendarDate } from '../../actions/index';

import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { mainCalendarTheme } from '../../themes/calendarThemes';

const MainCalendarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 325px;
  height: 400px;
  box-shadow: 6px 10px 27px 6px rgba(171, 171, 171, 0.69);
  margin: 100px auto;
`;

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
    const weekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <MainCalendarContainer>
        <ThemeProvider theme={mainCalendarTheme}>
          <CalendarMonth
            currentDateAndHour={this.state.currentDateAndHour}
            handleDateClick={this.handleDateClick}
            selectedDate={this.props.selectedDate}
            monthFormat={'MMM'}
            width="245px"
            height="350px"
            weekdayLabels={weekdayLabels}
          />
        </ThemeProvider>
      </MainCalendarContainer>
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
