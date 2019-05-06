"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const gatsby_1 = require("gatsby");
const CustomHead_1 = require("../components/atoms/CustomHead");
const Layout_1 = require("../components/organisms/Layout");
const styled_components_1 = require("styled-components");
const Thanks = styled_components_1.default.p `
  align-items: center;
  display: flex;
  font-size: 20px;
  height: 80vh;
  justify-content: center;
  line-height: 2;
  text-align: center;
`;
const ThanksPage = ({ data }) => {
    const siteTitle = `Thanks - ${data.site.siteMetadata.title}`;
    return (React.createElement(Layout_1.default, null,
        React.createElement(CustomHead_1.default, { title: siteTitle }),
        React.createElement(Thanks, null, "\u304A\u554F\u3044\u5408\u308F\u305B\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\u3002")));
};
exports.default = ThanksPage;
exports.pageQuery = gatsby_1.graphql `
  query ThanksQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
//# sourceMappingURL=thanks.js.map