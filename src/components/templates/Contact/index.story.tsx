import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Contact from '.'

const onSubmitForm = action('onSubmitForm')

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  onSubmitForm(e)
}

storiesOf(`templates|Contact`, module).add(
  'default',
  () => (
    <Contact
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
  ),
  {
    info: `
        default
      `,
  }
)
