import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => `${props.color}`};
  font-size: ${(props) => `${props.size}`};
  margin: ${(props) => (props.margin ? `${props.margin}` : 0)};
  font-weight: ${(props) => `${props.weight}`};
`;
