import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import BlackButton from '.'

storiesOf(`atom|${BlackButton.name}`, module)
  .addDecorator((storyFn) => (
    <div
      style={{
        padding: '30px',
        backgroundColor: '#fff',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('link', () => <BlackButton to="/">button</BlackButton>)
  .add('button', () => (
    <BlackButton onClick={action('onClick')}>button</BlackButton>
  ))
