import * as React from 'react'
import styled from 'styled-components'
import Header from '../Header'

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 50px 50px 20px;
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`

const Contents = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
`

const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Header />
    <Contents>
      { children }
    </Contents>
  </Wrapper>
)

export default Layout
