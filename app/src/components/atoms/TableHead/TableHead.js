import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

const TableHead = ({ indexList }) => {
  return (
    <Style.THead>
      <Style.TRow>
        {indexList.map((keyword) => {
          return <Style.THeader key={keyword}>{keyword}</Style.THeader>;
        })}
      </Style.TRow>
    </Style.THead>
  );
};

TableHead.propTypes = {
  indexList: PropTypes.array.isRequired,
};

export default TableHead;
