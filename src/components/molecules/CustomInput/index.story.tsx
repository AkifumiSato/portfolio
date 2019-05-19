import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from '../../../styles/global'
import CustomInput from './index'

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

storiesOf(`molecules|${ CustomInput.name }`, module)
  .addDecorator(StoryWrapper)
  .add('default',
    withInfo(`
    defaultのinputです。typeはtextになっています。
    `)(() =>
      <CustomInput
        name="test"
        onBlur={ action('onBlur') }
      />
    ))
  .add('custom attribute',
    withInfo(`
    placeholderやerror表示も可能です。
    `)(() =>
      <CustomInput
        name="test"
        type="mail"
        error="メールアドレスは必須です。"
        placeholder="story@rect.com"
        onBlur={ action('onBlur') }
      />
    ))
