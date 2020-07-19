import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

const Button = ({
  type = "button",
  content = "blank",
  onClick = (e) => true,
}) => {
  const classString = `button ${content}`;
  const properties = { type, onClick };

  return <Style.Button {...properties}>{content}</Style.Button>;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
