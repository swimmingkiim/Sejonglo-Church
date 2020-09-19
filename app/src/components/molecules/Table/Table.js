import React from "react";
import PropsType from "prop-types";
import TableHead from "../../atoms/TableHead/TableHead";
import TableRow from "../../atoms/TableRow/TableRow";
import * as Style from "./style";

const Table = ({ infoArray }) => {
  return (
    <Style.Table>
      <TableHead indexList={infoArray[0]} />
      {infoArray.map((subArray, index) => {
        if (index === 0) return;
        return <TableRow data={subArray} />;
      })}
    </Style.Table>
  );
};

Table.propTypes = {
  infoArray: PropsType.array.isRequired,
};

export default Table;
