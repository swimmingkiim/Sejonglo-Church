import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

const Label = ({ content = "blank" }) => {
  return <Style.Label>{content}</Style.Label>;
};

Label.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Label;
