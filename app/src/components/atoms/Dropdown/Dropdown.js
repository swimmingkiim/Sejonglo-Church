import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as Style from "./style";

const Dropdown = ({ name, list }) => {
  return (
    <Style.Wrapper>
      <Style.Menu>
        <Link to={name.link}>{name.keyword}</Link>
      </Style.Menu>
      <Style.List>
        {list.map(({ keyword, link }) => {
          return (
            <Style.ListItem key={keyword}>
              <Link to={link}>{keyword}</Link>
            </Style.ListItem>
          );
        })}
      </Style.List>
    </Style.Wrapper>
  );
};

Dropdown.propTypes = {
  name: PropTypes.object.isRequired,
  list: PropTypes.array,
};

export default Dropdown;
