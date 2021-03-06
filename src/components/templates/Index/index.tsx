import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import BlackButton from '../../atoms/BlackButton'
import Layout from '../../organisms/Layout'
import { OnlySP } from '../../utils/Devise'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-height: 700px;
  height: calc(100vh - 234px);
  padding: 70px 0 120px;
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

const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
  width: 200px;
  margin-top: 100px;
`

const Index: React.FC = () => (
  <Layout>
    <Wrapper>
      <Title>Hello, world.</Title>
      <OnlySP>
        <LinkWrapper>
          <BlackButton to="/about">about</BlackButton>
          <BlackButton to="/blog/">blog</BlackButton>
        </LinkWrapper>
      </OnlySP>
    </Wrapper>
  </Layout>
)

export default Index
