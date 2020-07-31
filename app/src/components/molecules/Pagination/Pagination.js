import React from "react";
import PropsType from "prop-types";
import PaginationBox from "../../atoms/PaginationBox/PaginationBox";
import * as Style from "./style";

const Pagination = ({ baseURL, maxPageNum }) => {
  let range = Array(maxPageNum).fill(1);
  range = range.map((value, index) => {
    return value + index;
  });

  return (
    <Style.Wrapper>
      <Style.Ul>
        {range.map((number) => {
          const addr = `${baseURL}?page=${number}`;
          return (
            <Style.Li key={number}>
              <PaginationBox href={addr} content={String(number)} />
            </Style.Li>
          );
        })}
      </Style.Ul>
    </Style.Wrapper>
  );
};

Pagination.propTypes = {
  baseURL: PropsType.string.isRequired,
  maxPageNum: PropsType.number.isRequired,
};

export default Pagination;
