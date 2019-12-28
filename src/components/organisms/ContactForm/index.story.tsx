import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import ContactForm from '.'

const StoryWrapper = (storyFn: () => React.FC) => (
  <div style={ {
    padding: '30px'
  } }>
    { storyFn() }
  </div>
)

storiesOf(`organisms|ContactForm`, module)
  .addDecorator(StoryWrapper)
  .add('contact form',
    () => <ContactForm
      action='javascript:void(0)'
      name={ {
        value: '',
        error: '',
      } }
      email={ {
        value: '',
        error: '',
      } }
      comment={ {
        value: '',
        error: '',
      } }
      onSubmitForm={ action('onSubmitForm') }
      onChangeNameInput={ action('onChangeNameInput') }
      onChangeEmailInput={ action('onChangeEmailInput') }
      onChangeCommentText={ action('onChangeCommentText') }
    />,
    {
      info: `
        Contact Formです。\n
        見た目のみなので、propsでハンドラを設定してください。
      `
    }
  )
  .add('contact form error',
    () => <ContactForm
      action='javascript:void(0)'
      name={ {
        value: 'test',
        error: 'error!',
      } }
      email={ {
        value: 'test',
        error: 'error!',
      } }
      comment={ {
        value: 'test',
        error: 'error!',
      } }
      onSubmitForm={ action('onSubmitForm') }
      onChangeNameInput={ action('onChangeNameInput') }
      onChangeEmailInput={ action('onChangeEmailInput') }
      onChangeCommentText={ action('onChangeCommentText') }
    />,
    {
      info: `
        Contact Formです。\n
        見た目のみなので、propsでハンドラを設定してください。
      `
    }
  )