import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

const Textarea = ({ w, rows }) => {
  return <Style.Textarea {...{ w, rows }}></Style.Textarea>;
};

Textarea.propTypes = {
  w: PropTypes.string,
  rows: PropTypes.number,
};

export default Textarea;
