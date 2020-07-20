import React from "react";
import PropTypes from "prop-types";
import Text from "../../atoms/Text/Text";
import Title from "../../atoms/Title/Title";
import * as Style from "./style";

const TodayWord = ({ content, bibleInfo }) => {
  return (
    <Style.Wrapper>
      <Title size="normal" content="오늘의 말씀" />
      <Title size="small" content={content} />
      <Text content={bibleInfo} />
    </Style.Wrapper>
  );
};

TodayWord.propTypes = {
  content: PropTypes.string.isRequired,
  bibleInfo: PropTypes.string.isRequired,
};

export default TodayWord;
