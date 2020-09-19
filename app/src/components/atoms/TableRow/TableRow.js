import React from "react";
import PropTypes from "prop-types";
import * as Style from "./style";

const TableRow = ({ data }) => {
  return (
    <Style.TRow>
      {data.map((keyword) => {
        if (Array.isArray(keyword)) {
          return (
            <Style.TData key={keyword[0]}>
              <Style.ATag href={keyword[1]}>{keyword[0]}</Style.ATag>
            </Style.TData>
          );
        }
        return <Style.TData key={keyword}>{keyword}</Style.TData>;
      })}
    </Style.TRow>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableRow;
