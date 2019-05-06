"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const gatsby_1 = require("gatsby");
const CustomHead_1 = require("../components/atoms/CustomHead");
const Layout_1 = require("../components/organisms/Layout");
const styled_components_1 = require("styled-components");
const ArticlePreview_1 = require("../components/molecules/ArticlePreview");
const MainTitle_1 = require("../components/atoms/MainTitle");
const MyList = styled_components_1.default.ul `
  & > li:not(:first-child) {
    margin-top: 50px;
  }
  
  @media screen and (max-width: 768px) {
    & > li:not(:first-child) {
      margin-top: 20px;
    }
  }
`;
const MyArticle = styled_components_1.default.div `
  margin-top: 10px;
`;
const BlogPage = ({ data }) => {
    const posts = data.allContentfulBlogPost.edges;
    const siteTitle = `Blog - ${data.site.siteMetadata.title}`;
    return (React.createElement(Layout_1.default, null,
        React.createElement(CustomHead_1.default, { title: siteTitle }),
        React.createElement(MainTitle_1.default, { title: 'Blog' }),
        React.createElement(MyArticle, null,
            React.createElement(MyList, null, posts.map(({ node }) => {
                return (React.createElement("li", { key: node.slug },
                    React.createElement(ArticlePreview_1.default, { slug: node.slug, publishDate: node.publishDate, title: node.title, description: node.description.description, heroImage: node.heroImage })));
            })))));
};
exports.default = BlogPage;
exports.pageQuery = gatsby_1.graphql `
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "YYYY-MM-DD")
          tags
          heroImage {
            sizes(maxWidth: 350, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            description
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
//# sourceMappingURL=blog.js.map