"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const gatsby_link_1 = require("gatsby-link");
const gatsby_image_1 = require("gatsby-image");
const styled_components_1 = require("styled-components");
const MyLink = styled_components_1.default(gatsby_link_1.default) `
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  padding: 15px 20px;
  text-decoration: none;
  transition: .3s;
  @media screen and (min-width: 769px) {
    &:hover {
      box-shadow: 0 4px 48px rgba(0, 0, 0, 0.3);
      transition: .3s;
      transform: translateY(-3px);
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const DateView = styled_components_1.default.p `
  display: inline-block;
  flex-shrink: 0;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  text-align: center;
  transform: rotate(180deg);
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 14px;
    margin-right: 0;
    transform: rotate(0);
    text-align: left;
    writing-mode: initial;
  }
`;
const MyImage = styled_components_1.default(gatsby_image_1.default) `
  flex-shrink: 0;
  height: 120px;
  object-fit: contain;
  margin-right: 20px;
  width: 200px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const MyBody = styled_components_1.default.div `
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
const MainTitle = styled_components_1.default.h3 `
  font-size: 18px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const MyText = styled_components_1.default.p `
  font-size: 12px;
  line-height: 1.5;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;
const ArticlePreview = ({ slug, publishDate, title, description, heroImage }) => {
    return (React.createElement(MyLink, { to: `/blog/${publishDate}/${slug}.html` },
        React.createElement(DateView, null, publishDate),
        React.createElement(MyImage, { sizes: heroImage.sizes, imgStyle: {
                objectFit: 'contain',
            }, alt: "" }),
        React.createElement(MyBody, null,
            React.createElement(MainTitle, null, title),
            React.createElement(MyText, null, description))));
};
exports.default = ArticlePreview;
//# sourceMappingURL=ArticlePreview.js.map