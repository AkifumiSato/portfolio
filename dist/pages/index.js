"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const gatsby_link_1 = require("gatsby-link");
const gatsby_1 = require("gatsby");
const CustomHead_1 = require("../components/atoms/CustomHead");
const Layout_1 = require("../components/organisms/Layout");
const styled_components_1 = require("styled-components");
const font_1 = require("../styles/mixin/font");
const TitleWrap = styled_components_1.default.div `
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 40%;
  width: 100%;
  @media screen and (max-width: 768px) {
    top: 35%;
  }
`;
const MainTitle = styled_components_1.default.h1 `
  font-size: 50px;
  ${font_1.ralewayMixin};
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
const fadeIn = styled_components_1.keyframes `
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const StrongFont = styled_components_1.default.strong `
  color: #00C5B2;
  font-weight: normal;
  animation: ${fadeIn} 1s;
  animation-delay: ${(props) => props.delay};
  animation-fill-mode: forwards;
  opacity: 0;
`;
const SubTitle = styled_components_1.default.p `
  color: #aaa;
  font-size: 25px;
  ${font_1.ralewayMixin};
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 5px;
  }
`;
const IndexMenu = styled_components_1.default.div `
  bottom: 20%;
  ${font_1.ralewayMixin};
  left: 0;
  margin: auto;
  max-width: 850px;
  padding: 0 50px;
  position: absolute;
  right: 0;
  text-align: center;
  @media screen and (max-width: 768px) {
    bottom: 15%;
  }
`;
const MenuList = styled_components_1.default.ul `
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const MenuListItem = styled_components_1.default.li `
  @media screen and (max-width: 768px) {
    padding: 10px 25px;
  }
`;
const MenuLinkText = styled_components_1.default.span `
  color: #aaa;
  font-size: 22px;
  position: relative;
  transition: .3s;
  transition-property: color;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  &:after {
    background-color: #333;
    content: '';
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    top: 100%;
    transition: .3s;
    width: 0;
    will-change: color, width;
  }
`;
const MenuLink = styled_components_1.default(gatsby_link_1.default) `
  display: block;
  padding: 10px 25px;
  text-decoration: none;
  @media screen and (min-width: 769px) {
    &:hover ${MenuLinkText} {
      color: #333;
      &:after {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: inline-block;
    padding: 0;
  }
`;
const IndexPage = ({ data }) => {
    const siteTitle = data.site.siteMetadata.title;
    const menuLinks = [
        {
            name: 'about',
            url: '/about/',
        },
        {
            name: 'blog',
            url: '/blog/',
        },
        {
            name: 'contact',
            url: '/contact/',
        },
    ];
    return (React.createElement(Layout_1.default, { rootLinkDisplay: false },
        React.createElement(CustomHead_1.default, { title: siteTitle }),
        React.createElement(TitleWrap, { className: "raleway" },
            React.createElement(MainTitle, null,
                React.createElement(StrongFont, { delay: ".3s" }, "A"),
                "KIFUMI \u00A0",
                React.createElement(StrongFont, { delay: ".8s" }, "S"),
                "ATO"),
            React.createElement(SubTitle, null, "frontend developer")),
        React.createElement(IndexMenu, null,
            React.createElement(MenuList, null, menuLinks.map((link, index) => (React.createElement(MenuListItem, { key: index },
                React.createElement(MenuLink, { to: link.url },
                    React.createElement(MenuLinkText, null, link.name)))))))));
};
exports.default = IndexPage;
exports.pageQuery = gatsby_1.graphql `
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
//# sourceMappingURL=index.js.map