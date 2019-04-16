import React from 'react'
import get from 'lodash/get'
import MainTitle from '../components/atoms/MainTitle'
import { graphql } from 'gatsby'
import CustomHead from '../components/atoms/CustomHead'
import Layout from '../components/organisms/Layout'
import NetlifyForm from '../container/NetlifyForm'
import styles from './contact.module.css'
import fonts from '../styles/fonts.module.css'

export default ({ data }) => {
  const siteTitle = `Contact - ${get(data, 'site.siteMetadata.title')}`

  return (
    <Layout>
      <CustomHead title={ siteTitle } />
      <MainTitle title="CONTACT" />
      <div className={ styles.wrapper }>
        <NetlifyForm>
          <div className={ styles.buttonWrapper }>
            <button type="submit" className={ fonts.raleway }>Send</button>
          </div>
        </NetlifyForm>
      </div>
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
