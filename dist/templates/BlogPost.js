"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Prism = require("prismjs");
require("prismjs/themes/prism.css");
const lodash_1 = require("lodash");
const gatsby_image_1 = require("gatsby-image");
const gatsby_1 = require("gatsby");
const CustomHead_1 = require("../components/atoms/CustomHead");
const Layout_1 = require("../components/organisms/Layout");
const styled_components_1 = require("styled-components");
const MainTitle_1 = require("../components/atoms/MainTitle");
const Article_1 = require("../components/organisms/Article");
const Publish = styled_components_1.default.p `
  color: #aaa;
  font-size: 14px;
`;
const MyContents = styled_components_1.default.div `
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;
const MyImg = styled_components_1.default(gatsby_image_1.default) `
  box-shadow: 0 4px 24px rgba(0, 0, 0, .35);
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
const BlogPost = ({ data }) => {
    const post = data.contentfulBlogPost;
    const siteTitle = `${post.title} - ${data.site.siteMetadata.title}`;
    const { description } = lodash_1.get(data, 'contentfulBlogPost.description');
    React.useEffect(() => {
        Prism.highlightAll();
    });
    return (React.createElement(Layout_1.default, null,
        React.createElement(CustomHead_1.default, { title: siteTitle, description: description }),
        React.createElement(MainTitle_1.default, { category: "BLOG", title: post.title }),
        React.createElement(MyImg, { alt: post.title, sizes: post.heroImage.sizes, imgStyle: {
                objectFit: 'cover',
                objectPosition: 'top',
            } }),
        React.createElement(MyContents, null,
            React.createElement(Publish, null, post.publishDate),
            React.createElement(Article_1.default, { dangerouslySetInnerHTML: {
                    __html: post.body.childMarkdownRemark.html,
                } }))));
};
exports.default = BlogPost;
exports.pageQuery = gatsby_1.graphql `
  query BlogPostBySlug($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes(maxHeight: 400) {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      description {
        description
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
//# sourceMappingURL=BlogPost.js.map