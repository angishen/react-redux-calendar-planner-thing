import React, { Component } from 'react';
import { connect } from 'react-redux';
import getDailyTimeBlocks from '../../utils/getDailyTimeBlocks';
import './style.css';

class ScheduleGrid extends Component {
  constructor(props) {
    super(props);

    this.state = { timeBlocks: [] };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      timeBlocks: getDailyTimeBlocks(nextProps.selectedDate)
    });
  }

  renderDayRow(timeBlock) {
    const label = timeBlock.format('H:mm');
    return (
      <tr key={label}>
        <th>{label}</th>
        <td />
      </tr>
    );
  }

  render() {
    const timeBlocks = this.state.timeBlocks;
    if (this.state.timeBlocks.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div className="schedule-grid">
        <table>
          <thead>
            <tr>
              <th />
              <th>{this.props.selectedDate.format('MMMM D, YYYY')}</th>
            </tr>
          </thead>
          <tbody>{timeBlocks.map(this.renderDayRow)}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ selectedDate }) {
  return { selectedDate };
}

export default connect(mapStateToProps)(ScheduleGrid);
