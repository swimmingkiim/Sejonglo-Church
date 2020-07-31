import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

const Image = ({ src, w = "30", h = "30", alt }) => {
  const props = {
    src,
    w,
    h,
    alt,
  };
  return <Style.Image {...props} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  w: PropTypes.string,
  h: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
