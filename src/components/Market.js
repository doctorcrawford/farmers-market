import React from "react";
import PropTypes from 'prop-types';

function Market(props) {
  return (
    <>
      <h3>{props.day}</h3>
      <h5>{props.location}</h5>
      <h6>{props.hours}</h6>
      <p>{props.booth}</p>
    </>
  );
}

Market.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
}

export default Market;