"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const gatsby_link_1 = require("gatsby-link");
const styled_components_1 = require("styled-components");
const font = require("../../styles/mixin/font");
const Navigation_1 = require("../molecules/Navigation");
const { GlobalStyles, ralewayMixin } = font;
const Wrapper = styled_components_1.default.div `
  box-sizing: border-box;
  padding: 50px 50px 20px;
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
const SiteRootLink = styled_components_1.default(gatsby_link_1.default) `
  text-align: left;
  text-decoration: none;
  font-size: 18px;
  ${ralewayMixin}
`;
const StrongFont = styled_components_1.default.strong `
  color: #00C5B2;
  font-weight: normal;
`;
const Contents = styled_components_1.default.div `
  max-width: 800px;
  margin: 0 auto 100px;
`;
const Copyright = styled_components_1.default.p `
  bottom: 20px;
  color: #aaa;
  font-size: 14px;
  left: 7%;
  position: absolute;
  @media screen and (max-width: 768px) {
    left: 20px;
  }
  ${ralewayMixin}
`;
const Layout = ({ children, rootLinkDisplay = true }) => {
    const date = new Date();
    const year = date.getFullYear();
    return (React.createElement(Wrapper, null,
        React.createElement(GlobalStyles, null),
        React.createElement(Navigation_1.default, null),
        rootLinkDisplay && (React.createElement(SiteRootLink, { to: '/' },
            React.createElement(StrongFont, null, "A"),
            "KIFUMI \u00A0",
            React.createElement(StrongFont, null, "S"),
            "ATO")),
        React.createElement(Contents, null,
            children,
            React.createElement(Copyright, null,
                "\u00A9\uFE0Eakfm.dev ",
                year))));
};
exports.default = Layout;
//# sourceMappingURL=Layout.js.map