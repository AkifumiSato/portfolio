import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Contact from '.'
import { IContactForm } from '../../organisms/ContactForm'

const onSubmitForm = action('onSubmitForm')

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  onSubmitForm(e)
}

const formProps: IContactForm = {
  action: '/',
  name: {
    value: '',
    error: '',
  },
  email: {
    value: '',
    error: '',
  },
  comment: {
    value: '',
    error: '',
  },
  onSubmitForm: handleSubmit,
  onChangeNameInput: action('onChangeNameInput'),
  onChangeEmailInput: action('onChangeEmailInput'),
  onChangeCommentText: action('onChangeCommentText'),
}

storiesOf(`templates|Contact`, module)
  .add('default',
    () => <Contact
      form={ formProps }
    />,
    {
      info: `
        default
      `
    })