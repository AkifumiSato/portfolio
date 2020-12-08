import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import Layout from '../../organisms/New/Layout'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 700px;
  height: calc(100vh - 120px);
  padding-bottom: 120px;
`

const flowColor = keyframes`
  to { 
    background-position-x: 114%;
  }
`

const Title = styled.h1`
  background: linear-gradient(
      to right,
      #f00 0%,
      #f80 14.28%,
      #dd0 28.56%,
      #0d0 42.85%,
      #0dd 57.14%,
      #00f 71.42%,
      #e0e 85.71%,
      #f00 100%
    )
    0 center / 1000% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${flowColor} 10s linear infinite;
  font-size: 20px;
  font-weight: bold;
`

const Index: React.FC = () => (
  <Layout isHome={true}>
    <Wrapper>
      <Title>Hello, world.</Title>
    </Wrapper>
  </Layout>
)

export default Index
