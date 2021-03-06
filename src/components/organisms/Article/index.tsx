import * as React from 'react'
import styled from 'styled-components'

type Props = {
  dangerouslySetInnerHTML?: {
    __html: string
  }
}

const ArticleInner = styled.div`
  word-break: break-word;

  & > h2 {
    font-size: 25px;
    font-weight: bold;
    line-height: 1;
  }

  & > h3 {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
  }

  & > p {
    line-height: 2;
    white-space: pre-line;
  }

  & a {
    text-decoration: underline;
  }

  & > ul > li {
    list-style: disc;
    margin-left: 20px;
    line-height: 1.5;
  }

  & > ol > li {
    list-style: decimal;
    margin-left: 20px;
    line-height: 1.5;
  }

  & > h2:not(:first-child) {
    margin-top: 50px;
  }

  & > h3:not(:first-child),
  & > p:not(:first-child),
  & > ul:not(:first-child),
  & > ol:not(:first-child),
  & > pre:not(:first-child) {
    margin-top: 20px;
  }

  & > h3 + p:not(:first-child),
  & > ul > li:not(:first-child),
  & > ol > li:not(:first-child) {
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    &:not(:first-child) {
      margin-top: 30px;
    }
    & > h2 {
      font-size: 20px;
      font-weight: bold;
      line-height: 2.1;
    }
    & > h3 {
      font-size: 16px;
      font-weight: bold;
      line-height: 2.1;
    }
    & > p {
      font-size: 14px;
      line-height: 2;
      margin-top: 10px;
    }
    & > ul > li,
    & > ol > li {
      font-size: 14px;
      line-height: 1.5;
    }
    & > ul > li:not(:first-child),
    & > ol > li:not(:first-child) {
      margin-top: 5px;
    }
    & > h2:not(:first-child) {
      margin-top: 50px;
    }
    & > h3:not(:first-child),
    & > p:not(:first-child),
    & > ul:not(:first-child),
    & > ol:not(:first-child),
    & > pre:not(:first-child) {
      margin-top: 10px;
    }
    & > h3 + p:not(:first-child) {
      margin-top: 0;
    }
  }
`

const Article: React.FC<Props> = (props) => {
  return <ArticleInner {...props} />
}

export default Article
