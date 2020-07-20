import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as Style from "./style";

const PaginationBox = ({ href = "/", content = "Home" }) => {
  return (
    <Style.LinkWrapper>
      <Link to={href}>{content}</Link>
    </Style.LinkWrapper>
  );
};

PaginationBox.propTypes = {
  href: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default PaginationBox;
