import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

const Title = ({ content, size }) => {
  let fontSize = "250%";
  if (size === "big") fontSize = "300%";
  else if (size === "small") fontSize = "200%";

  return <Style.Title {...{ fontSize }}>{content}</Style.Title>;
};

Title.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["big", "normal", "small"]),
};

export default Title;
