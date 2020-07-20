import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

const Title = ({ content, size }) => {
  let fontSize = "200%";
  if (size === "big") fontSize = "250%";
  else if (size === "small") fontSize = "150%";

  return <Style.Title {...{ fontSize }}>{content}</Style.Title>;
};

Title.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["big", "normal", "small"]),
};

export default Title;
