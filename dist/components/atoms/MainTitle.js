"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const MyTitle = styled_components_1.default.h1 `
  display: flex;
  flex-direction: column;
  font-size: 40px;
  font-weight: bold;
  height: 250px;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    height: 150px;
    padding: 0;
  }
`;
const Category = styled_components_1.default.span `
  display: block;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const MainText = styled_components_1.default.span `
  display: block;
  font-size: 40px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
const MainTitle = ({ title, category = '' }) => category ? (React.createElement(MyTitle, null,
    React.createElement(Category, null, category),
    React.createElement(MainText, null, title))) : (React.createElement(MyTitle, null, title));
exports.default = MainTitle;
//# sourceMappingURL=MainTitle.js.map