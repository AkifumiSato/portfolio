import { createGlobalStyle, css } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  @font-face {
    font-family: 'Raleway';
    font-display: swap;
  }

  body {
    animation: bodyFadeIn .3s;
    color: #333;
    font-family: -apple-system,BlinkMacSystemFont;
    font-size: 16px;
    line-height: 1.2;
    background: #fff;
    margin: 0;
  }
  
  @keyframes bodyFadeIn {
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
  }
  
  ::selection {
    background-color: #00C5B2;
    color: #fff;
  }
  
  img {
    display: block;
    width: 100%;
  }
  
  h1,
  h2,
  h3 {
    font-size: 2em;
    font-weight: normal;
  }
  
  a {
    color: currentColor;
  }
  
  li {
    list-style: none;
  }
  
  input,
  textarea {
    -webkit-appearance: none;
    border: none;
    outline: none;
    resize: none;
  }
  
  .input:focus {
    border: none;
    outline: none;
  }
  
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
  }
`

export const ralewayMixin = css`
  font-family: 'Raleway', sans-serif;
`
