import styled from "styled-components";

export const LinkWrapper = styled.div`
  width: 2em;
  height: 2em;
  font-size: 100%;
  background-color: blue;
  border-radius: 0.5em;
  position: relative;

  &:hover {
    background-color: #ffffff;
    & a {
      color: #000000;
    }
  }

  & a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: #ffffff;
    text-decoration: none;
  }
`;
