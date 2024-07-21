import * as S from "./Text.styled";

export const Text = (props) => {
  return (
    <S.Text
      color={props.color}
      size={props.size}
      margin={props.margin}
      weight={props.weight}
    >
      {props.children}
    </S.Text>
  );
};
