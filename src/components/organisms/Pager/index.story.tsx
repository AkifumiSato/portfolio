import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Pager from '.'

storiesOf(`organisms|Pager`, module)
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
  .add('current is 1, max is 10', () => (
    <Pager current={1} max={10} prevLink="/prevLink/" nextLink="/nextLink/" />
  ))
  .add('current is 5, max is 10', () => (
    <Pager current={5} max={10} prevLink="/prevLink/" nextLink="/nextLink/" />
  ))
  .add('current is 10, max is 10', () => (
    <Pager current={10} max={10} prevLink="/prevLink/" nextLink="/nextLink/" />
  ))
