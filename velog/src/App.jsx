import { styled, ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
