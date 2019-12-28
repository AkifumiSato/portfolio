import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Textarea from '.'

const StoryWrapper = (storyFn: () => React.FC) => (
  <div style={ {
    padding: '30px'
  } }>
    { storyFn() }
  </div>
)

storiesOf(`molecules|${ Textarea.name }`, module)
  .addDecorator(StoryWrapper)
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
