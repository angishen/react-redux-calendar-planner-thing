import React, { Component } from 'react';
import { isSameDate } from '../../utils/dateUtils';
import styled from 'styled-components';

const hoverBgColor = props => {
  if (props.selected) {
    return props.theme.backgroundColor.selected;
  } else if (props.disabled) {
    return props.theme.backgroundColor.default;
  }
  return props.theme.backgroundColor.hovered;
};

const hoverTextColor = props => {
  if (props.selected) {
    return props.theme.color.selected;
  } else if (props.disabled) {
    return props.theme.color.default;
  }
  return props.theme.color.hovered;
};

const StyledCalendarDay = styled.td`
  text-align: center;
  cursor: ${props => (!props.disabled ? 'pointer' : 'default')}
  border-radius: ${props => props.theme.border.radius};

  background-color: ${props =>
    props.selected
      ? props.theme.backgroundColor.selected
      : props.theme.backgroundColor.default};

  color: ${props =>
    props.selected ? props.theme.color.selected : props.theme.color.default};

  &:hover {
    background-color: ${hoverBgColor};
    color: ${hoverTextColor}
  }
  position: relative;
  width: 10%;
  
  &:before {
    content: "";
    display: block;
    padding-top: 100%
  }

`;

const StyledCalendarDayContent = styled.div`
  position: absolute;
  margin: 0;         
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
`;

export default class CalendarDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      disabled: this.props.date === null
    };
  }

  componentWillReceiveProps(nextProps) {
    isSameDate(nextProps.date, nextProps.selectedDate)
      ? this.setState({ selected: true })
      : this.setState({ selected: false });
  }

  handleDateClick = () => {
    this.props.handleDateClick(this.props.date);
  };

  render() {
    return (
      <StyledCalendarDay
        onClick={this.handleDateClick}
        selected={this.state.selected}
        disabled={this.state.disabled}
      >
        <StyledCalendarDayContent>
          {this.props.date ? this.props.date.format('D') : ''}
        </StyledCalendarDayContent>
      </StyledCalendarDay>
    );
  }
}
