import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../common/Title";
import {
  Layout,
  Category,
  NewsContainer,
  NewsImage,
  NewsTitle,
  BASE_IMG_URL,
} from "../News/News";

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState("general");
  const [status, setStatus] = useState("clear");
  const getNewsData = async () => {
    try {
      setStatus("busy");
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=kr&apiKey=${
          import.meta.env.VITE_APP_NEWS_KEY
        }`
      );
      setNewsData(res.data.articles);
      setStatus("clear");
    } catch {
      console.error("this is error");
    }
  };
  useEffect(() => {
    getNewsData();
  }, [category]);
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <>
      <Title title={"멋사 NEWS"}></Title>
      <Layout>
        <Category onCategoryChange={handleCategoryChange} />
        {newsData.length > 0 && status === "clear" ? (
          newsData.map((news, index) => (
            <NewsContainer key={index}>
              <NewsImage src={news.urlToImage || BASE_IMG_URL} />
              <NewsTitle URL={news.url}>{news.title}</NewsTitle>
            </NewsContainer>
          ))
        ) : (
          <Title title={"뉴스를 불러오는 중..."}></Title>
        )}
      </Layout>
    </>
  );
};

export default NewsList;
