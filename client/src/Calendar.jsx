import React from 'react';
import propTypes from 'prop-types';

const Calendar = (props) => {
  const setDate = () => {
    const date = props.start.split('-');
    date[2] = Number(date[2]) + props.i;
    return date.join('-');
  };

  return (
    <div className="calendar">
      <h1>{setDate()}</h1>
      <div>index: {props.i}</div>
    </div>
  );
};

Calendar.propTypes = {
  i: propTypes.number.isRequired,
  start: propTypes.string.isRequired,
};

export default Calendar;
