import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smooth: antialiased;
    -moz-osx-font-smooth: grayscale;
    background-color: black;
    color: #333;
    font-size: 16px;
  }
`;
