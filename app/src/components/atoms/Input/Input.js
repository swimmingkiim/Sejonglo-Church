import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

const Input = ({ type = "text", name, placeholder }) => {
  const props = {
    type,
    placeholder,
    name,
  };

  return <Style.Input id={name} {...props} />;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
