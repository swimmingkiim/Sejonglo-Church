import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  padding: 2%;
  border: 1px solid black;
  position: relative;

  & input {
    width: 30%;
  }

  & textarea {
    margin-top: 2em;
  }
`;

export const ButtonWrapper = styled.div`
  display: block;
  text-align: right;

  & button {
    margin-top: 0.5em;
  }
`;
