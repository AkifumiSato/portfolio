import * as React from 'react'
import styled from 'styled-components'

interface IProps {
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const Article: React.FC<IProps> = styled.div`
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
    color: #00C5B2;
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
  & > ul > li:not(:first-child),
  & > ol > li:not(:first-child) {
    margin-top: 10px;
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
  }
`

export default Article
