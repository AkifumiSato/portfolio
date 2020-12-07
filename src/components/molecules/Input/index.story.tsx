import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Input from '.'

storiesOf(`molecules|${Input.name}`, module)
  .addDecorator((storyFn) => (
    <div
      style={{
        padding: '30px',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('default', () => (
    <Input name="test" value="" onChange={action('onChange')} />
  ))
  .add('custom attribute', () => (
    <Input
      name="test"
      value=""
      type="mail"
      error="メールアドレスは必須です。"
      placeholder="story@rect.com"
      onChange={action('onChange')}
    />
  ))
