import * as React from 'react'
import { connect } from 'react-redux'
import { navigateTo } from 'gatsby-link'
import {
  updateNameAction,
  updateEmailAction,
  updateCommentAction,
  validateAction,
} from '../../redux/modules/app/user'
import { changeAction } from '../../redux/modules/ui/form'
import store from '../../redux/store'
import ContactForm from '../../components/organisms/ContactForm'

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

interface IFormObject {
  value: string;
  error: string;
}

interface IContactFormContainer {
  isChanged: boolean;
  name: IFormObject;
  email: IFormObject;
  comment: IFormObject;
  changeDispatcher: Function;
  nameDispatcher: Function;
  emailDispatcher: Function;
  commentDispatcher: Function;
  validateDispatcher: Function;
}

const ContactFormContainer: React.FC<IContactFormContainer> = (props) => {
  const {
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
    <ContactForm
      action='/thanks/'
      isChanged={ isChanged }
      name={ name }
      email={ email }
      comment={ comment }
      onSubmitForm={ onSubmitForm }
      onBlurNameInput={ onBlurNameInput }
      onBlurEmailInput={ onBlurEmailInput }
      onBlurCommentText={ onBlurCommentText }
    />
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
)(ContactFormContainer)
