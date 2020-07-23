import React from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input";
import Textarea from "../../atoms/Textarea/Textarea";
import Button from "../../atoms/Button/Button";
import * as Style from "./style";

const CommentForm = ({ action }) => {
  return (
    <Style.Form {...{ action }} method="POST">
      <Input type="text" name="newWriter" placeholder="이름" />
      <Textarea w="100" rows={8} name="newComment" />
      <Style.ButtonWrapper>
        <Button content="저장" type="submit" color="blue" />
      </Style.ButtonWrapper>
    </Style.Form>
  );
};

CommentForm.propTypes = {
  action: PropTypes.string.isRequired,
};

export default CommentForm;
