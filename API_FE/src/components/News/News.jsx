import * as S from "./News.styled";

export const Layout = (props) => {
  return <S.Layout>{props.children}</S.Layout>;
};

export const Category = ({ onCategoryChange }) => {
  const categories = [
    { key: "general", value: "전체" },
    { key: "sports", value: "스포츠" },
    { key: "entertainment", value: "연예" },
    { key: "business", value: "경제" },
  ];

  return (
    <S.Category>
      {categories.map((category) => (
        <span
          style={{
            cursor: "pointer",
          }}
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
        >
          {category.value}
        </span>
      ))}
    </S.Category>
  );
};

export const NewsContainer = (props) => {
  return <S.NewsContainer>{props.children}</S.NewsContainer>;
};

export const NewsImage = (props) => {
  return <S.NewsImg src={props.src} alt="이미지" />;
};

export const NewsTitle = (props) => {
  return <S.NewsTitle to={props.URL}>{props.children}</S.NewsTitle>;
};

export const BASE_IMG_URL =
  "https://lh3.googleusercontent.com/proxy/jNqMkqMlrHyWdZeuZTz_qZphAZGA_BMI2nsWVEQ70j0p6_d6ygIatdzjoXiFyNJJRpRWFR4";
