import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import MainTitle from '../components/main-title'
import styles from './contact.module.css'
import fonts from '../components/utils/fonts.module.css'

class RootIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    const siteTitle = `CONTACT - ${get(this, 'props.data.site.siteMetadata.title')}`

    return (
      <div>
        <Helmet title={ siteTitle } />
        <MainTitle title="CONTACT" />
        <div className={ styles.wrapper }>
          <form
            name="contact"
            method="post"
            // action="/thanks/"
            // data-netlify="true"
            // data-netlify-honeypot="bot-field"
            // onSubmit={this.handleSubmit}
          >
            <div className={ styles.inputText }>
              <input type="text" placeholder='Your name' />
            </div>
            <div className={ styles.inputText }>
              <input type="mail" placeholder='Email: xxxx@mail.com' />
            </div>
            <textarea className={ styles.textarea } cols="30" rows="5" maxLength="1000" placeholder='Free text' />
            <div className={ styles.buttonWrapper }>
              <button type="submit" className={ fonts.raleway }>Send</button>
            </div>
            { /* The `form-name` hidden field is required to support form submissions without JavaScript */ }
            <input type="hidden" name="form-name" value="contact" />
          </form>
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
