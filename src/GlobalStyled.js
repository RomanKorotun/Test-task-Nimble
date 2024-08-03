import styled, { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyled = createGlobalStyle`
body {
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  padding-top: 36px;
  padding-bottom: 36px;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
} ;

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
`;

export const Container = styled.div`
  max-width: 400px;
  padding-left: 34px;
  padding-right: 34px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 1200px;
    max-width: 1280px;
  }
`;
