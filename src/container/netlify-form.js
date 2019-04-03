import React from 'react'
import { connect } from 'react-redux'
import { navigateTo } from 'gatsby-link'
import {
  updateName,
  updateEmail,
  updateComment,
  incrementSubmitCounter,
} from '../redux/modules/user'
import BaseInput from '../components/atoms/base-input'
import BaseTextArea from '../components/atoms/base-textarea'

const encode = data => Object.keys(data)
  .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  .join('&')

const handleSubmit = (e, required) => {
  e.preventDefault()

  let isError = false
  const sendBody = {}
  for (const key in required) {
    if (required.hasOwnProperty(key) && (!required[key].value || required[key].error)) {
      isError = true
    } else {
      sendBody[key] = required[key].value
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
    submit,
    nameDispatcher,
    emailDispatcher,
    commentDispatcher,
    submitCounterDispatcher,
  } = props

  const validate = () => {
    nameDispatcher(name.value)
    emailDispatcher(email.value)
    commentDispatcher(comment.value)
    submitCounterDispatcher()
  }

  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      // data-netlify="true"
      // data-netlify-honeypot="bot-field"
      onSubmit={ e => handleSubmit(e, { name, email, comment }) || validate() }
    >
      <div style={ { display: 'none' } }>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </div>
      <BaseInput
        type='text'
        placeholder='Your name'
        value={ name.value }
        onBlur={ e => nameDispatcher(e.target.value) }
        error={ name.error }
        counter={ submit.counter }
      />
      <BaseInput
        type='mail'
        placeholder='Email: xxxx@mail.com'
        value={ email.value }
        onBlur={ e => emailDispatcher(e.target.value) }
        error={ email.error }
        counter={ submit.counter }
      />
      <BaseTextArea
        value={ comment.value }
        onBlur={ e => commentDispatcher(e.target.value) }
        error={ comment.error }
        counter={ submit.counter }
      />
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
  submit: state.user.submit,
})

const mapDispatchToProps = dispatch => ({
  nameDispatcher: (value) => dispatch(updateName(value)),
  emailDispatcher: (value) => dispatch(updateEmail(value)),
  commentDispatcher: (value) => dispatch(updateComment(value)),
  submitCounterDispatcher: () => dispatch(incrementSubmitCounter()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NetlifyForm)
