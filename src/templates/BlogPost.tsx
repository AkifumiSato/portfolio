import * as React from 'react'
import { get } from 'lodash'
import Img, { FluidObject } from 'gatsby-image'
import { graphql } from 'gatsby'
import CustomHead from '../components/atoms/CustomHead'
import Layout from '../components/organisms/Layout'
import styled from 'styled-components'
import MainTitle from '../components/atoms/MainTitle'
import Article from '../components/organisms/Article'

const Publish = styled.p`
  color: #aaa;
  font-size: 14px;
`

const MyContents = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`

const MyImg = styled(Img)`
  box-shadow: 0 4px 24px rgba(0, 0, 0, .35);
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

interface IProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
    contentfulBlogPost: {
      title: string;
      heroImage: {
        sizes: FluidObject;
      };
      publishDate: string;
      body: {
        childMarkdownRemark: {
          html: string;
        }
      };
    }
  }
}

const BlogPost: React.FC<IProps> = ({ data }) => {
  const post = data.contentfulBlogPost
  const siteTitle = `${post.title} - ${data.site.siteMetadata.title}`
  const { description } = get(data, 'contentfulBlogPost.description')

  return (
    <Layout>
      <CustomHead
        title={ siteTitle }
        description={ description }
      />
      <MainTitle category="BLOG" title={ post.title } />
      <MyImg alt={ post.title } sizes={ post.heroImage.sizes } imgStyle={ {
        objectFit: 'cover',
        objectPosition: 'top',
      } } />
      <MyContents>
        <Publish>{ post.publishDate }</Publish>
        <Article
          dangerouslySetInnerHTML={ {
            __html: post.body.childMarkdownRemark.html,
          } }
        />
      </MyContents>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
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
`
