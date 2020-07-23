import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

const Button = ({
  type = "button",
  content = "blank",
  color = "red",
  onClick = (e) => true,
}) => {
  const classString = `button ${content}`;
  const properties = { type, color, onClick };

  return <Style.Button {...properties}>{content}</Style.Button>;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
