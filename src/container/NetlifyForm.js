import React from 'react'
import { connect } from 'react-redux'
import { navigateTo } from 'gatsby-link'
import {
  updateName,
  updateEmail,
  updateComment,
  validate,
} from '../redux/modules/app/user'
import { change } from '../redux/modules/ui/form'
import BaseInput from '../components/molecules/CustomInput'
import BaseTextArea from '../components/molecules/CustomTextarea'

const encode = data => Object.keys(data)
  .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  .join('&')

const handleSubmit = (e, required) => {
  e.preventDefault()

  const isError = Object.values(required).some(({ error }) => error)

  const sendBody = Object.entries(required).reduce((accumulator, [key, { value }]) => {
    accumulator[key] = value
    return accumulator
  }, {})

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
    isChanged,
    name,
    email,
    comment,
    changeDispatcher,
    nameDispatcher,
    emailDispatcher,
    commentDispatcher,
    validateDispatcher,
  } = props

  const updateChangeFlg = () => !isChanged && changeDispatcher()

  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={ e => {
        handleSubmit(e, { name, email, comment })
        updateChangeFlg()
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
          updateChangeFlg()
        } }
        error={ isChanged ? name.error : '' }
      />
      <BaseInput
        type='mail'
        name='email'
        placeholder='Email: xxxx@mail.com'
        value={ email.value }
        onBlur={ e => {
          emailDispatcher(e.target.value)
          updateChangeFlg()
        } }
        error={ isChanged ? email.error : '' }
      />
      <BaseTextArea
        name='comment'
        value={ comment.value }
        onBlur={ e => {
          commentDispatcher(e.target.value)
          updateChangeFlg()
        } }
        error={ isChanged ? comment.error : '' }
      />
      { children }
      { /* The `form-name` hidden field is required to support form submissions without JavaScript */ }
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

const mapStateToProps = state => ({
  isChanged: state.ui.form.isChanged,
  email: state.app.user.email,
  name: state.app.user.name,
  comment: state.app.user.comment,
})

const mapDispatchToProps = dispatch => ({
  changeDispatcher: () => dispatch(change()),
  nameDispatcher: (value) => dispatch(updateName(value)),
  emailDispatcher: (value) => dispatch(updateEmail(value)),
  commentDispatcher: (value) => dispatch(updateComment(value)),
  validateDispatcher: () => dispatch(validate()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NetlifyForm)
