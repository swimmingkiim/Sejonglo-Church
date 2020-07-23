import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import Button from "./src/components/atoms/Button/Button";
import Dropdown from "./src/components/atoms/Dropdown/Dropdown";
import Image from "./src/components/atoms/Image/Image";
import Input from "./src/components/atoms/Input/Input";
import Label from "./src/components/atoms/Label/Label";
import PaginationBox from "./src/components/atoms/PaginationBox/PaginationBox";
import Text from "./src/components/atoms/Text/Text";
import Textarea from "./src/components/atoms/Textarea/Textarea";
import Title from "./src/components/atoms/Title/Title";
import Ul from "./src/components/atoms/Ul/Ul";

const App = () => {
  const sample = [
    { link: "/hello", keyword: "hello" },
    { link: "/world", keyword: "world" },
  ];

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <Button type="button" content="저장" color="grey" />
        <Dropdown name={{ keyword: "Dropdown", link: "/" }} list={sample} />
        <Image src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" />
        <Input name="newTitle" placeholder="hello world" />
        <Label content="hello world" />
        <br />
        <PaginationBox href="/hello" content="1" />
        <PaginationBox href="/hello" content="2" />
        <PaginationBox href="/hello" content="3" />
        <Text content="jskldfjklsjdfkljslkdjfklsjdklfjskldjfklsdjfklsjdklfjslkdjfkls" />
        <Textarea w="30" rows="25" />
        <Title size="big" content="hello world!" />
        <Title size="normal" content="hello world!" />
        <Title size="small" content="hello world!" />
        <Ul list={sample} />
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
