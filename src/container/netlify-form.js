import React from 'react'
import { connect } from 'react-redux'
import { navigateTo } from 'gatsby-link'

const encode = data => Object.keys(data)
  .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  .join('&')

const handleSubmit = (e, params) => {
  e.preventDefault()

  let isError = false
  const sendBody = {}
  for (const key in params) {
    if (params.hasOwnProperty(key) && params[key].error) {
      isError = true
    } else {
      sendBody[key] = params[key].value
    }
  }

  if (isError) return false

  const form = e.target
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': form.getAttribute('name'),
      ...sendBody,
    }),
  })
    .then(() => navigateTo(form.getAttribute('action')))
    .catch(error => alert(error))
}

const NetlifyForm = (props) => {
  const {
    children,
    name,
    email,
    comment,
  } = props

  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={ e => handleSubmit(e, { name, email, comment }) }
    >
      <div style={ { display: 'none' } }>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </div>
      { children }
      { /* The `form-name` hidden field is required to support form submissions without JavaScript */ }
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

const mapStateToProps = state => ({
  email: state.user.email,
  name: state.user.name,
  comment: state.user.comment,
})

export default connect(
  mapStateToProps,
  null,
)(NetlifyForm)
