import * as S from "./Image.styled";

export const Image = (props) => {
  return (
    <S.Image
      width={props.width}
      height={props.height}
      margin={props.margin}
      src={props.src}
      borderRadius={props.borderRadius}
    />
  );
};
