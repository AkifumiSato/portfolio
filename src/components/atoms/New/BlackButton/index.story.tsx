import { storiesOf } from '@storybook/react'
import * as React from 'react'
import BlackButton from '.'

storiesOf(`atom|${BlackButton.name}`, module)
  .addDecorator((storyFn) => (
    <div
      style={{
        padding: '30px',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('default', () => <BlackButton to="/">button</BlackButton>)
