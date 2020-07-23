import styled from "styled-components";

export const LinkWrapper = styled.div`
  display: inline-block;
  width: 2em;
  height: 2em;
  font-size: 100%;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 0.5em;
  position: relative;

  & + & {
    margin-left: 1%;
  }

  &:hover {
    background-color: #adb0c4;
    & a {
      color: #ffffff;
    }
  }

  & a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: #000000;
    text-decoration: none;
  }
`;
