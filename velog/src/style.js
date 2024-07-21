import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


  html {
    overflow-x: hidden;
  }

  body, html {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Apple SD Gothic Neo,Malgun Gothic,맑은 고딕,나눔고딕,Nanum Gothic,Noto Sans KR,Noto Sans CJK KR,arial,돋움,Dotum,Tahoma,Geneva,sans-serif;
  }
  body {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;
  }


  #root {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column
  }



`;
