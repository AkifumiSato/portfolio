import * as React from 'react'
import { connect } from 'react-redux'
import { navigateTo } from 'gatsby-link'
import {
  updateNameAction,
  updateEmailAction,
  updateCommentAction,
  validateAction,
} from '../redux/modules/app/user'
import { changeAction } from '../redux/modules/ui/form'
import store from '../redux/store'
import BaseInput from '../components/molecules/CustomInput'
import BaseTextArea from '../components/molecules/CustomTextarea'

interface IEncode {
  [key: string]: string;
}

const encode = (data: IEncode) => Object.keys(data)
  .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
  .join('&')

interface IRequired {
  [key: string]: {
    error: string;
    value: string;
  }
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>, required: IRequired) => {
  const isError = Object.values(required).some(({ error }) => Boolean(error))

  const sendBody = Object.entries(required).reduce((accumulator: { [key: string]: string; }, [key, { value }]) => {
    accumulator[key] = value
    return accumulator
  }, {})

  if (isError) return false

  const form = e.currentTarget
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

interface IFormIbject {
  value: string;
  error: string;
}

interface INetlifyForm {
  isChanged: boolean;
  name: IFormIbject;
  email: IFormIbject;
  comment: IFormIbject;
  changeDispatcher: Function;
  nameDispatcher: Function;
  emailDispatcher: Function;
  commentDispatcher: Function;
  validateDispatcher: Function;
}

const NetlifyForm: React.FC<INetlifyForm> = (props) => {
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

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    isChanged && handleSubmit(e, { name, email, comment })
    validateDispatcher()
    updateChangeFlg()
  }

  const onBlurNameInput = (e: React.FormEvent<HTMLInputElement>) => {
    nameDispatcher(e.currentTarget.value)
    updateChangeFlg()
  }

  const onBlurEmailInput = (e: React.FormEvent<HTMLInputElement>) => {
    emailDispatcher(e.currentTarget.value)
    updateChangeFlg()
  }

  const onBlurCommentText = (e: React.FormEvent<HTMLInputElement>) => {
    commentDispatcher(e.currentTarget.value)
    updateChangeFlg()
  }

  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={ onSubmitForm }
    >
      <div style={ { display: 'none' } }>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </div>
      <BaseInput
        type='text'
        name='name'
        placeholder='Your name'
        value={ name.value }
        onBlur={ onBlurNameInput }
        error={ isChanged ? name.error : '' }
      />
      <BaseInput
        type='mail'
        name='email'
        placeholder='Email: xxxx@mail.com'
        value={ email.value }
        onBlur={ onBlurEmailInput }
        error={ isChanged ? email.error : '' }
      />
      <BaseTextArea
        value={ comment.value }
        onBlur={ onBlurCommentText }
        error={ isChanged ? comment.error : '' }
      />
      { children }
      { /* The `form-name` hidden field is required to support form submissions without JavaScript */ }
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => ({
  isChanged: state.ui.form.isChanged,
  email: state.app.user.email,
  name: state.app.user.name,
  comment: state.app.user.comment,
})

const mapDispatchToProps = (dispatch: Function) => ({
  changeDispatcher: () => dispatch(changeAction()),
  nameDispatcher: (value: string) => dispatch(updateNameAction(value)),
  emailDispatcher: (value: string) => dispatch(updateEmailAction(value)),
  commentDispatcher: (value: string) => dispatch(updateCommentAction(value)),
  validateDispatcher: () => dispatch(validateAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NetlifyForm)
