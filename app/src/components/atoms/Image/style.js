import styled from "styled-components";

export const Image = styled.img`
  width: ${(props) => (props.w === "auto" ? "auto" : `${props.w}%`)};
  height: ${(props) => (props.h === "auto" ? "auto" : `${props.h}%`)};
`;
