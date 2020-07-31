import React from "react";
import PropsTypes from "prop-types";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import * as Style from "./style";

const Navigation = ({ list }) => {
  return (
    <Style.Nav>
      <Style.Ul>
        {list.map(({ name, subArray }) => {
          return (
            <Style.Li>
              <Dropdown name={name} list={subArray} />
            </Style.Li>
          );
        })}
      </Style.Ul>
    </Style.Nav>
  );
};

Navigation.protoTypes = {
  list: PropsTypes.array.isRequired,
};

export default Navigation;
