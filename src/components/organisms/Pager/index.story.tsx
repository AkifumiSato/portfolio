import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Pager from '.'

storiesOf(`organisms|Pager`, module)
  .add('current is 1, max is 10',
    () => <Pager
      current={ 1 }
      max={ 10 }
    />,
    {
      info: `
        current is 1, max is 10
      `
    })