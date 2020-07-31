import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  width: 10%;
  min-width: 7em;
  height: auto;
  position: relative;
  z-index: 1;
  color: #000000;
  background-color: pink;
  font-size: 1.5em;
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
  padding: 5%;
  color: #000000;
  background-color: pink;
`;

export const List = styled.ul`
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  width: 100%;
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 1;
  animation: show 0.5s;
`;

export const ListItem = styled.li`
  width: 100%;
  height: auto;
  padding: 5%;
  color: #000000;
  background-color: pink;

  &:hover {
    background-color: #ffffff;
  }
`;
