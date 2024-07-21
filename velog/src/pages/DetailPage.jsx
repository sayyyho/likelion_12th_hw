import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/container/Header/Header";
import { Content } from "../components/common/Content/Content";
import { Text } from "../components/common/Text/Text";
import { dummy_data } from "../data/dummy_data";
import { Image } from "../components/common/Image/Image";

export const DetailPage = () => {
  const postID = useParams().postID;
  const data = dummy_data[postID - 1];
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}년 ${month}월 ${day}일`;
  }
  return (
    <>
      <Header isDetail={true} />
      <Content isFlex={true} justifyProp="center" margin="2rem 0 0 0">
        <Content isFlex={true} flexDirection="column" width="60%">
          <h1
            style={{
              fontSize: "3rem",
            }}
          >
            {postID}번째 세션
          </h1>
          <Content
            isFlex={true}
            alignProp="center"
            justifyProp="space-between"
            height="3rem"
            margin="0 0.5rem"
          >
            <Content
              isFlex={true}
              gapProp="5px"
              justifyProp="flex-start"
              alignProp="center"
            >
              <Text weight="bold">박세호</Text>
              <Text> {formatDate(data.createdAt)}</Text>
            </Content>
            <Content
              isFlex={true}
              radius="16px"
              border="1px solid #20C997"
              width="6rem"
              height="65%"
              alignProp="center"
            >
              <Text color="#20C997">팔로우</Text>
            </Content>
          </Content>
          <Image src={data.thumbnail} width="100%" margin="3rem 0 0 0"></Image>
          <Text margin="2rem 0">{data.content}</Text>
        </Content>
      </Content>
    </>
  );
};
