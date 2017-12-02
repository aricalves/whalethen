import React from 'react';
import propTypes from 'prop-types';
import Cal from 'react-big-calendar';
import moment from 'moment';

Cal.setLocalizer(Cal.momentLocalizer(moment));

const Calendar = (props) => {
  const st = props.start.split('-');
  const date = new Date(st[0], Number(st[1] - 1), st[2]);
  console.log(st, date)
  return (
    <Cal
      className="container timeline"
      events={props.events}
      startAccessor={date}
    />
  );
};

Calendar.propTypes = {

};

Calendar.propTypes = {
  events: propTypes.instanceOf(Object).isRequired,
  start: propTypes.string.isRequired,
};

export default Calendar;

/*
    <div className="calendar">
      <h1>{setDate()}</h1>
      <div>index: {props.i}</div>
    </div>

*/
