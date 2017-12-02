import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import DayView from './Day';
import Calendar from './Calendar';

const Timeline = (props) => {
  const {
    timelineData,
    timelineId,
    timelineName,
    onCreateEnter,
    handleNewEvent,
    handleNewAddress,
    createEvent,
    getTrip,
    startDate,
    calendar,
  } = props;
  
  const displayView = () => {
    if (calendar) {
      return <Calendar events={timelineData} name={timelineName} start={startDate} />;
    }
    return (
      <div className="container day">
        {_.map(timelineData, (day, i) => (
          <DayView
            timelineId={timelineId}
            day={day}
            key={i}
            onCreateEnter={onCreateEnter}
            handleNewEvent={handleNewEvent}
            handleNewAddress={handleNewAddress}
            createEvent={createEvent}
            getTrip={getTrip}
          />))}
      </div>);
  };

  const view = displayView();

  return (
    <div className="container timeline">
      {view}
    </div>
  );
};

Timeline.propTypes = {
  timelineData: propTypes.instanceOf(Array).isRequired,
  timelineId: propTypes.string.isRequired,
  timelineName: propTypes.string,
  startDate: propTypes.string.isRequired,
  onCreateEnter: propTypes.func.isRequired,
  handleNewEvent: propTypes.func.isRequired,
  handleNewAddress: propTypes.func.isRequired,
  createEvent: propTypes.func.isRequired,
  getTrip: propTypes.func.isRequired,
  calendar: propTypes.bool.isRequired,
};

export default Timeline;
