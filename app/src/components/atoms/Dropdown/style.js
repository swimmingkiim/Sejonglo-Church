import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;
  min-width: 3em;
  height: auto;
  position: relative;
  z-index: 1;
  color: #000000;
  background-color: pink;
  font-size: 150%;
  text-align: center;

  &:hover {
    & ul {
      display: block;
    }
  }

  & a {
    text-decoration: none;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5%;
  color: #000000;
  background-color: pink;
`;

export const List = styled.ul`
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 1;
`;

export const ListItem = styled.li`
  min-width: 3em;
  height: auto;
  padding: 0.5%;
  color: #000000;
  background-color: pink;

  &:hover {
    background-color: #ffffff;
  }
`;
