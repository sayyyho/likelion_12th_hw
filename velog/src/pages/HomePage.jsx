import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dummy_data } from "../data/dummy_data";
import { CardGrid } from "../components/container/CardGrid/CardGrid";
import { Header } from "../components/container/Header/Header";
import { Nav } from "../components/container/Nav/Nav";
import { Image } from "../components/common/Image/Image";
import { Text } from "../components/common/Text/Text";
import { Content } from "../components/common/Content/Content";
import { ArticleFooter } from "../components/container/ArticleFooter/ArticleFooter";

const StyledLink = styled(Link)`
  width: 100%;
  height: 410px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
`;

export const HomePage = () => {
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}년 ${month}월 ${day}일`;
  }
  return (
    <>
      <Header />
      <Nav />
      <CardGrid>
        {dummy_data.map((data) => (
          <StyledLink to={`detail/${data.postID}`}>
            <Image width="100%" height="50%" src={data.thumbnail} />
            <Content
              height="40%"
              isFlex={true}
              justifyProp={"space-between"}
              flexDirection="column"
            >
              <Text weight="bold">{data.content}</Text>
              <Content margin="0.5rem">
                <Text size="0.6rem">{formatDate(data.createdAt)}</Text>
              </Content>
            </Content>
            <ArticleFooter></ArticleFooter>
          </StyledLink>
        ))}
      </CardGrid>
    </>
  );
};
