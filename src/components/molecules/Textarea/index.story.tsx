import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Textarea from '.'

storiesOf(`molecules|${ Textarea.name }`, module)
  .addDecorator((storyFn) => (
    <div style={ {
      padding: '30px'
    } }>
      { storyFn() }
    </div>
  ))
  .add(
    'default',
    () => <Textarea
      value=""
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
