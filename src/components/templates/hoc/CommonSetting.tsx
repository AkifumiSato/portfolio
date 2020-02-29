import * as React from 'react'
import styled from 'styled-components'
import { ralewayMixin } from '../../../styles/font'
import { GlobalStyles } from '../../../styles/global'

const Copyright = styled.p`
  color: #666;
  font-size: 14px;
  ${ ralewayMixin };
  max-width: 1280px;
  margin: 0 auto 50px;
  
  @media screen and (max-width: 768px) {
    left: 20px;
  }
`

const PolicyLink = styled.a`
  font-style: italic;
`

const date = new Date()
const year = date.getFullYear()

const CommonSetting = (Component: React.FC) => (props: any) => (
  <>
    <GlobalStyles />
    <Component { ...props } />
    <Copyright>©︎akfm.dev { year }. Using <PolicyLink href="https://www.google.com/intl/ja/policies/privacy/partners/"
                                                      target="_blank" rel="noopener">Google
      Analytics</PolicyLink></Copyright>
  </>
)

export default CommonSetting
