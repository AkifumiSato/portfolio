import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from '../../../styles/global'
import ContactForm from './index'

const InjectionStyle = createGlobalStyle`
  body {
    background: transparent;
  }
`

const StoryWrapper = (storyFn: () => React.FC) => (
  <div style={ {
    padding: '30px'
  } }>
    <GlobalStyles />
    <InjectionStyle />
    { storyFn() }
  </div>
)

storiesOf(`organisms|ContactForm`, module)
  .addDecorator(withInfo)
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