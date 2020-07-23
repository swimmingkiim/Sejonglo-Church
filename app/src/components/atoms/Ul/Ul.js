import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";
import { Link } from "react-router-dom";

const Ul = ({ list }) => {
  return (
    <Style.Ul>
      {list.map((item) => {
        return (
          <Style.Li key={item.keyword}>
            <Link to={item.link}>{item.keyword}</Link>
          </Style.Li>
        );
      })}
    </Style.Ul>
  );
};

Ul.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Ul;
