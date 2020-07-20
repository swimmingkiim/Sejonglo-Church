import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

const Text = ({ content }) => {
  return <Style.Text>{content}</Style.Text>;
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Text;
