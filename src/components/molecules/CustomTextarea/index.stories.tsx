import * as React from 'react';
import { storiesOf } from '@storybook/react';
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
  <div style={{
    padding: '30px'
  }}>
    <GlobalStyles />
    <InjectionStyle />
    { storyFn() }
  </div>
)

storiesOf(`molecules|${CustomTextarea.name}`, module)
  .addDecorator(StoryWrapper)
  .add('default',
    withInfo(`
    defaultのtextareaです。
    `)(() =>
      <CustomTextarea
        onBlur={action('onBlur')}
      />
    ))
  .add('custom attribute',
    withInfo(`
    defaultのtextareaです。
    `)(() =>
      <CustomTextarea
        onBlur={action('onBlur')}
        placeholder="サンプル文です。"
        error="本文は必須です。"
      />
    ))
