import * as React from 'react'
import { connect } from 'react-redux'
import { navigateTo } from 'gatsby-link'
import {
  updateNameAction,
  updateEmailAction,
  updateCommentAction,
  validateAction,
} from '../../redux/modules/app/user'
import { changeNameAction, changeEmailAction, changeCommentAction } from '../../redux/modules/ui/form'
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
  isChangeName: boolean;
  isChangeEmail: boolean;
  isChangeComment: boolean;
  name: IFormObject;
  email: IFormObject;
  comment: IFormObject;
  changeNameDispatcher: () => void;
  changeEmailDispatcher: () => void;
  changeCommentDispatcher: () => void;
  nameDispatcher: (a: string) => void;
  emailDispatcher: (a: string) => void;
  commentDispatcher: (a: string) => void;
  validateDispatcher: () => void;
}

const ContactFormContainer: React.FC<IContactFormContainer> = (props) => {
  const {
    isChangeName,
    isChangeEmail,
    isChangeComment,
    name,
    email,
    comment,
    changeNameDispatcher,
    changeEmailDispatcher,
    changeCommentDispatcher,
    nameDispatcher,
    emailDispatcher,
    commentDispatcher,
    validateDispatcher,
  } = props

  const isSubmit = () => !name.error && !email.error && !comment.error

  const onceChangeNameDispatch = () => !isChangeName && changeNameDispatcher()
  const onceEmailDispatch = () => !isChangeEmail && changeEmailDispatcher()
  const onceCommentDispatch = () => !isChangeComment && changeCommentDispatcher()

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    isSubmit() && handleSubmit(e, { name, email, comment })
    validateDispatcher()
    onceChangeNameDispatch()
    onceEmailDispatch()
    onceCommentDispatch()
  }

  const onBlurNameInput = (e: React.FormEvent<HTMLInputElement>) => {
    nameDispatcher(e.currentTarget.value)
    onceChangeNameDispatch()
  }

  const onBlurEmailInput = (e: React.FormEvent<HTMLInputElement>) => {
    emailDispatcher(e.currentTarget.value)
    onceEmailDispatch()
  }

  const onBlurCommentText = (e: React.FormEvent<HTMLInputElement>) => {
    commentDispatcher(e.currentTarget.value)
    onceCommentDispatch()
  }

  return (
    <ContactForm
      action='/thanks/'
      name={ {
        value: name.value,
        error: isChangeName ? name.error : '',
      } }
      email={ {
        value: email.value,
        error: isChangeEmail ? email.error : '',
      } }
      comment={ {
        value: comment.value,
        error: isChangeComment ? comment.error : '',
      } }
      onSubmitForm={ onSubmitForm }
      onBlurNameInput={ onBlurNameInput }
      onBlurEmailInput={ onBlurEmailInput }
      onBlurCommentText={ onBlurCommentText }
    />
  )
}

type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => ({
  isChangeName: state.ui.form.isChangeName,
  isChangeEmail: state.ui.form.isChangeEmail,
  isChangeComment: state.ui.form.isChangeComment,
  email: state.app.user.email,
  name: state.app.user.name,
  comment: state.app.user.comment,
})

const mapDispatchToProps = (dispatch: Function) => ({
  changeNameDispatcher: () => dispatch(changeNameAction()),
  changeEmailDispatcher: () => dispatch(changeEmailAction()),
  changeCommentDispatcher: () => dispatch(changeCommentAction()),
  nameDispatcher: (value: string) => dispatch(updateNameAction(value)),
  emailDispatcher: (value: string) => dispatch(updateEmailAction(value)),
  commentDispatcher: (value: string) => dispatch(updateCommentAction(value)),
  validateDispatcher: () => dispatch(validateAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactFormContainer)
