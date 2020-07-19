import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import Button from "./src/components/atoms/Button/Button";

const App = () => {
  const alertBoom = () => {
    window.alert("hellayall!");
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <Button type="button" content="hellayall" onClick={alertBoom} />
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: black;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
`;

export default App;
