import { FluidObject } from 'gatsby-image'
import * as React from 'react'
import styled from 'styled-components'
import MainTitle from '../../atoms/MainTitle'
import ArticlePreview from '../../molecules/ArticlePreview'
import Layout from '../../organisms/Layout'
import Pager from '../../organisms/Pager'
import CommonSetting from '../hoc/CommonSetting'

const parsePagerUrl = (baseUrl: string, pageNumber: number) =>
  pageNumber <= 1 ? `${baseUrl}` : `${baseUrl}${pageNumber}`

const MyList = styled.ul`
  & > li:not(:first-child) {
    margin-top: 50px;
  }

  @media screen and (max-width: 768px) {
    & > li:not(:first-child) {
      margin-top: 20px;
    }
  }
`

const MyArticle = styled.div`
  display: grid;
  row-gap: 50px;
  margin-top: 50px;
`

export type BlogPost = {
  slug: string
  createdAt: string
  title: string
  description: string
  heroImage: {
    fluid: FluidObject
  }
}

type Props = {
  currentPage: number
  pageCount: number
  baseUrl: string
  posts: Array<BlogPost>
}

const BlogListPage: React.FC<Props> = ({
  currentPage,
  pageCount,
  baseUrl,
  posts,
}) => (
  <Layout>
    <MainTitle>Blog</MainTitle>
    <MyArticle>
      <MyList>
        {posts.map((post) => (
          <li key={post.slug}>
            <ArticlePreview
              url={`/blog/${post.createdAt}/${post.slug}.html`}
              createdAt={post.createdAt}
              title={post.title}
              description={post.description}
              heroImage={post.heroImage}
            />
          </li>
        ))}
      </MyList>
      <Pager
        current={currentPage}
        max={pageCount}
        prevLink={parsePagerUrl(baseUrl, currentPage - 1)}
        nextLink={parsePagerUrl(baseUrl, currentPage + 1)}
      />
    </MyArticle>
  </Layout>
)

export default CommonSetting<Props>(BlogListPage)
