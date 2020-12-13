import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import ContactForm from '.'

const onSubmitForm = action('onSubmitForm')

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  onSubmitForm(e)
}

storiesOf(`organisms|ContactForm`, module)
  .addDecorator((storyFn) => (
    <div
      style={{
        padding: '30px',
        backgroundColor: '#fff',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('contact form', () => (
    <ContactForm
      name={{
        value: '',
        error: '',
      }}
      email={{
        value: '',
        error: '',
      }}
      comment={{
        value: '',
        error: '',
      }}
      onSubmitForm={handleSubmit}
      onChangeNameInput={action('onChangeNameInput')}
      onChangeEmailInput={action('onChangeEmailInput')}
      onChangeCommentText={action('onChangeCommentText')}
    />
  ))
  .add('contact form error', () => (
    <ContactForm
      name={{
        value: 'test',
        error: 'error!',
      }}
      email={{
        value: 'test',
        error: 'error!',
      }}
      comment={{
        value: 'test',
        error: 'error!',
      }}
      onSubmitForm={handleSubmit}
      onChangeNameInput={action('onChangeNameInput')}
      onChangeEmailInput={action('onChangeEmailInput')}
      onChangeCommentText={action('onChangeCommentText')}
    />
  ))
