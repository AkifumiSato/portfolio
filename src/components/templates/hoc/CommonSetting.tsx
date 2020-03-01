import * as React from 'react'
import styled from 'styled-components'
import { ralewayMixin } from '../../../styles/font'
import { GlobalStyles } from '../../../styles/global'

const Copyright = styled.p`
  color: #666;
  font-size: 14px;
  ${ ralewayMixin };
  box-sizing: border-box;
  padding-left: 50px;
  max-width: 1280px;
  margin: 0 auto 50px;
  
  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`

const PolicyLink = styled.a`
  font-style: italic;
`

const date = new Date()
const year = date.getFullYear()

type Hoc = <T>(Component: React.FC<T>) => (props: T) => ReturnType<React.FC<T>>

const CommonSetting: Hoc = (Component) => (props) => (
  <>
    <GlobalStyles />
    <Component { ...props } />
    <Copyright>
      ©︎akfm.dev { year }. Using&nbsp;
      <PolicyLink
        href="https://www.google.com/intl/ja/policies/privacy/partners/"
        target="_blank" rel="noopener"
      >
        Google Analytics
      </PolicyLink>
    </Copyright>
  </>
)

export default CommonSetting
