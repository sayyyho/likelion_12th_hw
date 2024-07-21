import axios from "axios";
import { useEffect, useState } from "react";
import {
  SecondWrapper,
  Ranking,
  RankingDes,
  RankingWrapper,
  RankingDesWrapper,
  Caution,
} from "../components/Second/Styled";
import Title from "../components/common/Title";

const SecondPage = () => {
  const [pm, setPM] = useState([])
  
  const fetchData = async() => {
    const response = await axios.get(`http://openAPI.seoul.go.kr:8088/${import.meta.env.VITE_APP_SEOUL_KEY}/json/RealtimeCityAir/1/50/`)
    const sortedData = response.data.RealtimeCityAir.row.sort(
      (a, b) => b.PM10 - a.PM10
    );
    setPM(sortedData)
  }
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Title title={"지금 서울에서 미세먼지 농도가 가장 높은 지역 TOP 3"} />
      <SecondWrapper>
        {pm.length > 0 ? ( 
        <>
          <RankingWrapper>
            <Ranking>1위: {pm[0].MSRSTE_NM}</Ranking>
            <Ranking>2위: {pm[1].MSRSTE_NM}</Ranking>
            <Ranking>3위: {pm[2].MSRSTE_NM}</Ranking>
          </RankingWrapper>

          <RankingDesWrapper>
            <RankingDes>
              1위인 "{pm[0].MSRSTE_NM}"의 현재 미세먼지 농도는 "{pm[0].PM10}"
            </RankingDes>
            <RankingDes>
              2위인 "{pm[1].MSRSTE_NM}"의 현재 미세먼지 농도는 "{pm[1].PM10}"
            </RankingDes>
            <RankingDes>
              3위인 "{pm[2].MSRSTE_NM}"의 현재 미세먼지 농도는 "{pm[2].PM10}"
            </RankingDes>
          </RankingDesWrapper>
          <Caution>마스크 꼭 쓰고 댕기세요 ~!</Caution>
        </>
        ) : (<p>데이터를 불러오는 중입니다...</p>
        )}
      </SecondWrapper>
    </>
  );
};

export default SecondPage;
