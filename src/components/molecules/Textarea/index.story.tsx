import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from '../../../styles/global'
import Textarea from './index'

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

storiesOf(`molecules|${ Textarea.name }`, module)
  .addDecorator(withInfo)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => <Textarea
      value=""
      placeholder="サンプル文です。"
      onChange={ action('onChange') }
    />,
    {
      info: `
        defaultのtextareaです。
      `
    })
  .add(
    'custom attribute',
    () => <Textarea
      value="サンプル文です"
      onChange={ action('onChange') }
      error="本文は必須です。"
    />,
    {
      info: `
        defaultのtextareaです。
      `
    })
