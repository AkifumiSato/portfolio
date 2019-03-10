import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import MainTitle from '../components/main-title'

class RootIndex extends React.Component {
  render() {
    const siteTitle = `CONTACT - ${get(this, 'props.data.site.siteMetadata.title')}`

    return (
      <div>
        <Helmet title={ siteTitle } />
        <MainTitle title="CONTACT" />
        <div>
          <p style={
            {
              color: '#aaa',
              fontSize: '30px',
              textAlign: 'center',
            }
          }>作成中...</p>
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
