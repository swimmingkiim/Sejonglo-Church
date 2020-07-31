import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: fit-content;
  border: 1px solid black;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Li = styled.li`
  display: inline-block;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;
