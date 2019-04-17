import React from 'react'
import get from 'lodash/get'
import MainTitle from '../components/atoms/MainTitle'
import { graphql } from 'gatsby'
import CustomHead from '../components/atoms/CustomHead'
import Layout from '../components/organisms/Layout'
import NetlifyForm from '../container/NetlifyForm'
import styled from 'styled-components'
import { ralewayMixin } from '../styles/mixin/font'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  & > button {
    background-color: #00C5B2;
    border: 1px solid #00C5B2;
    border-radius: 3px;
    color: #fff;
    display: block;
    ${ralewayMixin};
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    padding: 20px 0;
    transition: .3s;
    width: 200px;
    &:hover {
      box-shadow: 0 4px 24px rgba(0,0,0,.3);
      opacity: 0.8;
    }
  }  
`

const Wrapper = styled.div`
  box-shadow: 0 4px 24px rgba(0,0,0,.15);
  padding: 50px;
  margin: 0 auto;
  width: 600px;
  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    width: 100%;
  }

`

export default ({ data }) => {
  const siteTitle = `Contact - ${get(data, 'site.siteMetadata.title')}`

  return (
    <Layout>
      <CustomHead title={ siteTitle } />
      <MainTitle title="CONTACT" />
      <Wrapper>
        <NetlifyForm>
          <ButtonWrapper>
            <button type="submit">Send</button>
          </ButtonWrapper>
        </NetlifyForm>
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
