import styled from "styled-components";

export const Label = styled.label`
  width: fit-content;
  height: auto;
  padding: 0.25em;
  font-size: 100%;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 0.5em;

  & + & {
    margin-left: 0.5em;
  }
`;
