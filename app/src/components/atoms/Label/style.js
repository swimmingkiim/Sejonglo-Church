import styled from "styled-components";

export const Label = styled.label`
  width: fit-content;
  height: auto;
  padding: 0.5em;
  font-size: 100%;
  color: #ffffff;
  background-color: blue;
  border: none;
  border-radius: 0.5em;

  & + & {
    margin-left: 0.5em;
  }
`;
