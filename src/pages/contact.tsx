import * as React from 'react'
import MainTitle from '../components/atoms/MainTitle'
import { graphql } from 'gatsby'
import CustomHead from '../components/atoms/CustomHead'
import Layout from '../components/organisms/Layout'
import ContactFormContainer from '../containers/organisms/ContactFormContainer'
import styled from 'styled-components'

const Wrapper = styled.div`
  box-shadow: 0 4px 24px rgba(0,0,0,.15);
  padding: 50px;
  margin: 0 auto;
  width: 600px;
  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    padding: 30px;
    width: 100%;
  }

`

interface IProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
}

const ContactPage: React.FC<IProps> = ({ data }) => {
  const siteTitle = `Contact - ${data.site.siteMetadata.title}`

  return (
    <Layout>
      <CustomHead title={ siteTitle } />
      <MainTitle title="CONTACT" />
      <Wrapper>
        <ContactFormContainer />
      </Wrapper>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
