import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from '../../../styles/global'
import CustomTextarea from './index'

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

storiesOf(`molecules|${ CustomTextarea.name }`, module)
  .addDecorator(withInfo)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => <CustomTextarea
      onBlur={ action('onBlur') }
    />,
    {
      info: `
        defaultのtextareaです。
      `
    })
  .add(
    'custom attribute',
    () => <CustomTextarea
      onBlur={ action('onBlur') }
      placeholder="サンプル文です。"
      error="本文は必須です。"
    />,
    {
      info: `
        defaultのtextareaです。
      `
    })
