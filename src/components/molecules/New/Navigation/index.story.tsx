import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Navigation from '.'

storiesOf(`molecules|${Navigation.name}`, module)
  .addDecorator((storyFn) => (
    <div
      style={{
        backgroundColor: '#fff',
        padding: '30px',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('default', () => <Navigation />)
