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
  .addDecorator(withInfo)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => <CustomInput
      name="test"
      onBlur={ action('onBlur') }
    />,
    {
      info: `
        defaultのinputです。typeはtextになっています。
      `
    })
  .add(
    'custom attribute',
    () =>
      <CustomInput
        name="test"
        type="mail"
        error="メールアドレスは必須です。"
        placeholder="story@rect.com"
        onBlur={ action('onBlur') }
      />,
    {
      info: `
        placeholderやerror表示も可能です。
      `
    })
