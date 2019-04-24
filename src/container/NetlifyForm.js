import React from 'react'
import { connect } from 'react-redux'
import { navigateTo } from 'gatsby-link'
import {
  action,
  updateName,
  updateEmail,
  updateComment,
  validate,
} from '../redux/modules/user'
import BaseInput from '../components/molecules/CustomInput'
import BaseTextArea from '../components/molecules/CustomTextarea'

const encode = data => Object.keys(data)
  .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  .join('&')

const handleSubmit = (e, required, actionFlg) => {
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

  if (!actionFlg || isError) return false

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
    actionFlg,
    name,
    email,
    comment,
    actionDispatcher,
    nameDispatcher,
    emailDispatcher,
    commentDispatcher,
    validateDispatcher,
  } = props

  const updateActionFlg = () => !actionFlg && actionDispatcher()

  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={ e => {
        handleSubmit(e, { name, email, comment }, actionFlg)
        updateActionFlg()
        validateDispatcher()
      } }
    >
      <div style={ { display: 'none' } }>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </div>
      <BaseInput
        type='text'
        name='name'
        placeholder='Your name'
        value={ name.value }
        onBlur={ e => {
          nameDispatcher(e.target.value)
          updateActionFlg()
        } }
        error={ name.error }
      />
      <BaseInput
        type='mail'
        name='email'
        placeholder='Email: xxxx@mail.com'
        value={ email.value }
        onBlur={ e => {
          emailDispatcher(e.target.value)
          updateActionFlg()
        } }
        error={ email.error }
      />
      <BaseTextArea
        name='comment'
        value={ comment.value }
        onBlur={ e => {
          commentDispatcher(e.target.value)
          updateActionFlg()
        } }
        error={ comment.error }
      />
      { children }
      { /* The `form-name` hidden field is required to support form submissions without JavaScript */ }
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

const mapStateToProps = state => ({
  actionFlg: state.user.actionFlg,
  email: state.user.email,
  name: state.user.name,
  comment: state.user.comment,
})

const mapDispatchToProps = dispatch => ({
  actionDispatcher: () => dispatch(action()),
  nameDispatcher: (value) => dispatch(updateName(value)),
  emailDispatcher: (value) => dispatch(updateEmail(value)),
  commentDispatcher: (value) => dispatch(updateComment(value)),
  validateDispatcher: () => dispatch(validate()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NetlifyForm)
