import React from "react";
import Produce from "./Produce";
import PropTypes from 'prop-types';

function ProduceList(props) {
  return (
    <>
      <h3>{props.month}</h3>
      {props.names.map((name, index) =>
        <Produce name={name}
        key={index} />
      )}
    </>
  )
}

ProduceList.propTypes = {
  month: PropTypes.string,
  names: PropTypes.arrayOf(PropTypes.string)
}

export default ProduceList;