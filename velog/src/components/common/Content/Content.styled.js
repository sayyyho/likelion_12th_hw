import styled from "styled-components";

export const Content = styled.div`
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  margin: ${(props) => (props.margin ? `${props.margin}` : 0)};
  padding: ${(props) => (props.padding ? `${props.padding}` : 0)};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : 0)};
  border: ${(props) => `${props.border}`};
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: ${(props) => `${props.background}`};
  display: ${(props) => (props.isFlex ? "flex" : "block")};
  justify-content: ${(props) =>
    props.justifyProp ? `${props.justifyProp}` : "center"};
  gap: ${(props) => (props.gapProp ? `${props.gapProp}` : 0)};
  flex-direction: ${(props) =>
    props.isFlex ? `${props.flexDirection}` : "row"};
  align-items: ${(props) =>
    props.alignProp ? `${props.alignProp}` : "stretch"};
  cursor: ${(props) => (props.isCursor ? "pointer" : "default")};
  box-shadow: ${(props) => `${props.shadow}`};
`;
