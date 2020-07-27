import React from "react";
import PropTypes from "prop-types";
import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";
import * as Style from "./style";

const CommentView = ({ list }) => {
  return (
    <Style.Wrapper>
      <Style.Ul>
        {list.map(({ name, content }) => {
          return (
            <Style.Li key={name}>
              <Title content={name} size="small" />
              <Text content={content} />
              <hr />
            </Style.Li>
          );
        })}
      </Style.Ul>
    </Style.Wrapper>
  );
};

CommentView.propTypes = {
  list: PropTypes.array.isRequired,
};

export default CommentView;
