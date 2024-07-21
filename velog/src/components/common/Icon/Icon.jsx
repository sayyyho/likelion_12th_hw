import styled from "styled-components";

// BaseIcon 컴포넌트
const BaseIcon = styled.svg`
  width: ${(props) => (props.width ? `${props.width}` : "24px")};
  height: ${(props) => (props.height ? `${props.height}` : "24px")};
  fill: currentColor;
`;

// BellIcon 컴포넌트
export const Icon = (props) => (
  <BaseIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox}
    width={props.width}
    height={props.height}
  >
    <path d={props.d}></path>
  </BaseIcon>
);
