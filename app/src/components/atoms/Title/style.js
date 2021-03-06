import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.fontSize}%;
  color: #000000;
  letter-spacing: 0.1em;

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => props.fontSize - 150}%;
  }
`;
