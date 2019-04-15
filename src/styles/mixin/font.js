import { createGlobalStyle, css } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Raleway;
    font-display: swap;
    src: local('Raleway'),
    url('https://fonts.googleapis.com/css?family=Raleway');
  }
`

export const ralewayMixin = css`
  font-family: 'Raleway', sans-serif;
`
