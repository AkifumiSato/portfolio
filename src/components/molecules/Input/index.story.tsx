import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from '../../../styles/global'
import Input from './index'

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

storiesOf(`molecules|${ Input.name }`, module)
  .addDecorator(withInfo)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => <Input
      name="test"
      value=""
      onChange={ action('onChange') }
    />,
    {
      info: `
        defaultのinputです。typeはtextになっています。
      `
    })
  .add(
    'custom attribute',
    () =>
      <Input
        name="test"
        value="test@example.com"
        type="mail"
        error="メールアドレスは必須です。"
        placeholder="story@rect.com"
        onChange={ action('onChange') }
      />,
    {
      info: `
        placeholderやerror表示も可能です。
      `
    })
