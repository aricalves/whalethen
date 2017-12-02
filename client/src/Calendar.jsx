import React from 'react';
import propTypes from 'prop-types';
import Cal from 'react-big-calendar';
import moment from 'moment';

Cal.setLocalizer(Cal.momentLocalizer(moment));

const Calendar = (props) => {
  console.log(props);
  return (
    <div className="calendar">
      <Cal events={props.events[0].events} />
    </div>
  );
};

Calendar.propTypes = {

};

Calendar.propTypes = {
  events: propTypes.instanceOf(Object).isRequired,
};

export default Calendar;

/*
    <div className="calendar">
      <h1>{setDate()}</h1>
      <div>index: {props.i}</div>
    </div>

*/
