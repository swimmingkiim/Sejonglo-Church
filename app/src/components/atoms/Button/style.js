import styled from "styled-components";

const colorSet = {
  red: {
    before: "#f28f79",
    after: "#f26052",
  },
  blue: {
    before: "#226DC9",
    after: "#044691",
  },
  green: {
    before: "#00CC90",
    after: "#00875F",
  },
  grey: {
    before: "#ADB0C4",
    after: "#848696",
  },
};

export const Button = styled.button`
  min-width: 2em;
  height: auto;
  padding: 1%;
  font-size: 150%;
  letter-spacing: 0.1em;
  color: #ffffff;
  background-color: ${(props) => colorSet[props.color].before};
  border: none;
  border-radius: 0.5em;

  &:hover {
    background-color: ${(props) => colorSet[props.color].after};
  }
`;

// red :
