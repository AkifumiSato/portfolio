import { storiesOf } from '@storybook/react'
import * as React from 'react'
import MainTitle from './index'

storiesOf(`atom|${MainTitle.name}`, module)
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
  .add('Single Title', () => <MainTitle>Title</MainTitle>)
