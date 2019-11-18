import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { navigateTo } from 'gatsby-link'
import {
  updateNameAction,
  updateEmailAction,
  updateCommentAction,
  validateAction, userSelector,
} from '../../redux/modules/app/user'
import { changeNameAction, changeEmailAction, changeCommentAction, formSelector } from '../../redux/modules/ui/form'
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

const ContactFormContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { name, email, comment } = useSelector(userSelector).toObject()
  const { isChangeName, isChangeComment, isChangeEmail } = useSelector(formSelector).toObject()

  const isSubmit = !name.error && !email.error && !comment.error

  const onceChangeNameDispatch = React.useCallback(() => !isChangeName && dispatch(changeNameAction()), [isChangeName])
  const onceEmailDispatch = React.useCallback(() => !isChangeEmail && dispatch(changeEmailAction()), [isChangeEmail])
  const onceCommentDispatch = React.useCallback(() => !isChangeComment && dispatch(changeCommentAction()), [isChangeComment])

  const onSubmitForm = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    isSubmit && handleSubmit(e, { name, email, comment })
    dispatch(validateAction())
    onceChangeNameDispatch()
    onceEmailDispatch()
    onceCommentDispatch()
  }, [isSubmit])

  const onBlurNameInput = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateNameAction(e.currentTarget.value))
    onceChangeNameDispatch()
  }, [])

  const onBlurEmailInput = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateEmailAction(e.currentTarget.value))
    onceEmailDispatch()
  }, [])

  const onBlurCommentText = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateCommentAction(e.currentTarget.value))
    onceCommentDispatch()
  }, [])

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
      onChangeNameInput={ onBlurNameInput }
      onChangeEmailInput={ onBlurEmailInput }
      onChangeCommentText={ onBlurCommentText }
    />
  )
}

export default ContactFormContainer
