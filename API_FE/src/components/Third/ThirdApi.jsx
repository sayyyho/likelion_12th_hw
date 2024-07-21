import axios from "axios";
import { BtnWrapper, BtnContainer } from "../First/Styled";

const ThirdApi = () => {
  const fetchData = async() => {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_APP_NEWS_KEY}`)
    console.log(res)
  }

  return (
    <>
      <BtnWrapper>
        <BtnContainer onClick={fetchData}>
          데이터 GET해보기! <br />
        </BtnContainer>
      </BtnWrapper>
    </>
  );
};

export default ThirdApi;
