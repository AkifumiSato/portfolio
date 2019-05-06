"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const MainTitle_1 = require("../components/atoms/MainTitle");
const gatsby_1 = require("gatsby");
const CustomHead_1 = require("../components/atoms/CustomHead");
const Layout_1 = require("../components/organisms/Layout");
const NetlifyForm_1 = require("../container/NetlifyForm");
const styled_components_1 = require("styled-components");
const font_1 = require("../styles/mixin/font");
const ButtonWrapper = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  margin-top: 50px;
  & > button {
    background-color: #00C5B2;
    border: 1px solid #00C5B2;
    border-radius: 3px;
    color: #fff;
    display: block;
    ${font_1.ralewayMixin};
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    padding: 20px 0;
    transition: .3s;
    width: 200px;
    &:hover {
      box-shadow: 0 4px 24px rgba(0,0,0,.3);
      opacity: 0.8;
    }
  }  
`;
const Wrapper = styled_components_1.default.div `
  box-shadow: 0 4px 24px rgba(0,0,0,.15);
  padding: 50px;
  margin: 0 auto;
  width: 600px;
  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    padding: 30px;
    width: 100%;
  }

`;
const ContactPage = ({ data }) => {
    const siteTitle = `Contact - ${data.site.siteMetadata.title}`;
    return (React.createElement(Layout_1.default, null,
        React.createElement(CustomHead_1.default, { title: siteTitle }),
        React.createElement(MainTitle_1.default, { title: "CONTACT" }),
        React.createElement(Wrapper, null,
            React.createElement(NetlifyForm_1.default, null,
                React.createElement(ButtonWrapper, null,
                    React.createElement("button", { type: "submit" }, "Send"))))));
};
exports.default = ContactPage;
exports.pageQuery = gatsby_1.graphql `
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
//# sourceMappingURL=contact.js.map