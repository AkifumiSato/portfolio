import { storiesOf } from '@storybook/react'
import * as React from 'react'
import NavyButton from '.'

storiesOf(`atom|${ NavyButton.name }`, module)
  .addDecorator((storyFn) => (
    <div style={ {
      padding: '30px'
    } }>
      { storyFn() }
    </div>
  ))
  .add(
    'default',
    () => (
      <NavyButton to="/">button</NavyButton>
    ),
    {
      info: `
        default
      `
    })
