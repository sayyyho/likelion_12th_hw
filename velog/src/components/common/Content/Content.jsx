import * as S from "./Content.styled";

export const Content = (props) => {
  return (
    <S.Content
      width={props.width}
      height={props.height}
      margin={props.margin}
      padding={props.padding}
      background={props.background}
      color={props.color}
      radius={props.radius}
      isFlex={props.isFlex}
      alignProp={props.alignProp}
      justifyProp={props.justifyProp}
      flexDirection={props.flexDirection}
      gapProp={props.gapProp}
      onClick={props.onClick}
      isCursor={props.isCursor}
      style={props.style}
      border={props.border}
      shadow={props.shadow}
    >
      {props.children}
    </S.Content>
  );
};
