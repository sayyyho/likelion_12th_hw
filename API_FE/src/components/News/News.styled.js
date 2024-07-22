import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 60%;
  height: 2rem;
  padding: 1rem;
  border: 1px solid white;
  margin: 2rem 0 0 0;
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 100px;
  gap: 1rem;
`;

export const NewsImg = styled.img`
  height: 100%;
  width: 20%;
`;

export const NewsTitle = styled(Link)`
  height: 100%;
  width: 70%;
  color: white;
`;
