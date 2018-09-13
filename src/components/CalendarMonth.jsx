import React, { Component } from 'react';
import { connect } from 'react-redux';

import { testAction } from '../actions';

class CalendarMonth extends Component {
  handleClick = event => {
    this.props.testAction('hello');
  };

  render() {
    return (
      <div>
        <h1>{this.props.test}</h1>
        <button onClick={this.handleClick}>CLICK ME</button>
      </div>
    );
  }
}

function mapStateToProps({ test }) {
  return { test };
}

export default connect(
  mapStateToProps,
  { testAction }
)(CalendarMonth);
