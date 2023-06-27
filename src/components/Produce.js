import React from "react";
import PropTypes from 'prop-types';

function Produce (props) {
  return (
    <>
      <li>{props.name}</li>
    </>
  );
}

Produce.propTypes = {
  name: PropTypes.string
}

export default Produce;