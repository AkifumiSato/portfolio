import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Navigation from './index'

storiesOf(`molecules|${Navigation.name}`, module)
  .addDecorator((storyFn) => (
    <div
      style={{
        padding: '30px',
        backgroundColor: '#fff',
        height: '100vh',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('default', () => <Navigation />)
