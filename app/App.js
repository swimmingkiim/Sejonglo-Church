import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import CommentForm from "./src/components/molecules/CommentForm/CommentForm";
import CommentView from "./src/components/molecules/CommentView/CommentView";
import Logo from "./src/components/molecules/Logo/Logo";
import Navigation from "./src/components/molecules/Navigation/Navigation";
import Pagination from "./src/components/molecules/Pagination/Pagination";
import Table from "./src/components/molecules/Table/Table";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper></Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 10%;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: black;
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
`;

export default App;
