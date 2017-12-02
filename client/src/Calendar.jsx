import React from 'react';
import propTypes from 'prop-types';
import Cal from 'react-big-calendar';
import moment from 'moment';

Cal.setLocalizer(Cal.momentLocalizer(moment));

const Calendar = (props) => {
  const trip = props.start.split('-');
  const tripStart = new Date(trip[0], Number(trip[1] - 1), trip[2]);
  const tripEnd = new Date(trip[0], Number(trip[1] - 1), Number(trip[2]) + props.events.length);
  const myTrip = [
    {
      title: props.name,
      start: tripStart,
      end: tripEnd,
    },
  ];
  return (
    <div className="container calendar">
      <Cal
        events={myTrip}
        toolbar={false}
      />
    </div>
  );
};

Calendar.propTypes = {

};

Calendar.propTypes = {
  events: propTypes.instanceOf(Object).isRequired,
  start: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default Calendar;

/*
    <div className="calendar">
      <h1>{setDate()}</h1>
      <div>index: {props.i}</div>
    </div>

*/
