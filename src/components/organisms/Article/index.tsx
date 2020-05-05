import * as Prism from 'prismjs'
import 'prismjs/components/prism-docker.min.js'
import 'prismjs/components/prism-elm.min.js'
import 'prismjs/components/prism-haskell.min.js'
import 'prismjs/components/prism-json.min.js'
import 'prismjs/components/prism-typescript.min.js'
import 'prismjs/components/prism-yaml.min.js'
import 'prismjs/themes/prism-tomorrow.css'
import * as React from 'react'
import styled from 'styled-components'

interface IProps {
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const ArticleInner: React.FC<IProps> = styled.div` 
  word-break: break-word;
  &:not(:first-child) {
    margin-top: 50px;
  }
  & > h2 {
    font-size: 30px;
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
    color: #3d69b7;
    text-decoration: underline;
  }
  & > ul > li {
    list-style: disc;
    margin-left: 20px;
  }
  & > ol > li {
    list-style: decimal;
    margin-left: 20px;
  }
  & > h2:not(:first-child) {
    margin-top: 50px;
  }
  & > h3:not(:first-child),
  & > p:not(:first-child),
  & > ul:not(:first-child),
  & > ol:not(:first-child),
  & > pre:not(:first-child) {
    margin-top: 30px;
  }
  & > h3 + p:not(:first-child) {
    margin-top: 10px;
  }
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

// prism effect hoc
const PrismEffect = <T extends {}>(Component: React.FC<T>): React.FC<T> => (props) => {
  React.useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <Component { ...props } />
  )
}

const Article = PrismEffect(ArticleInner)

export default Article
