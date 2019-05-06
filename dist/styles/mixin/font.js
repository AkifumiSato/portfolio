"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
require("typeface-raleway");
exports.GlobalStyles = styled_components_1.createGlobalStyle `
  body {
    animation: bodyFadeIn .3s;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", "Yu Gothic", YuGothic, sans-serif;
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
`;
exports.ralewayMixin = styled_components_1.css `
  font-family: 'Raleway', sans-serif;
`;
//# sourceMappingURL=font.js.map