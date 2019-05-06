"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const lodash_1 = require("lodash");
const gatsby_link_1 = require("gatsby-link");
const gatsby_1 = require("gatsby");
const CustomHead_1 = require("../components/atoms/CustomHead");
const Layout_1 = require("../components/organisms/Layout");
const styled_components_1 = require("styled-components");
const MainTitle_1 = require("../components/atoms/MainTitle");
const Article_1 = require("../components/organisms/Article");
const MyLink = styled_components_1.default(gatsby_link_1.default) `
  color: #00C5B2;
  font-size: 14px;
  text-decoration: underline;
`;
const AboutPage = ({ data }) => {
    const siteTitle = `About - ${data.site.siteMetadata.title}`;
    const posts = data.allContentfulPerson.edges[0].node.about.content;
    return (React.createElement(Layout_1.default, null,
        React.createElement(CustomHead_1.default, { title: siteTitle }),
        React.createElement(MainTitle_1.default, { title: "ABOUT" }),
        React.createElement(Article_1.default, null,
            posts.map((({ content, nodeType }, index) => {
                switch (nodeType) {
                    case 'heading-2':
                        return (React.createElement("h2", { key: index }, lodash_1.head(content).value));
                    case 'paragraph':
                        return (React.createElement("p", { key: index }, lodash_1.head(content).value));
                    default:
                        return null;
                }
            })),
            React.createElement("h2", null, "contact"),
            React.createElement("p", null,
                React.createElement(MyLink, { to: '/contact/' }, "\u203A go to contact")))));
};
exports.default = AboutPage;
exports.pageQuery = gatsby_1.graphql `
  query AboutQuery {
    allContentfulPerson {
      edges {
        node {
          about {
            content {
              nodeType
              content {
                nodeType
                value
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
//# sourceMappingURL=about.js.map