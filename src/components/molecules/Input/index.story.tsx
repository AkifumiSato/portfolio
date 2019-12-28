import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Input from '.'

const StoryWrapper = (storyFn: () => React.FC) => (
  <div style={ {
    padding: '30px'
  } }>
    { storyFn() }
  </div>
)

storiesOf(`molecules|${ Input.name }`, module)
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
        value=""
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
