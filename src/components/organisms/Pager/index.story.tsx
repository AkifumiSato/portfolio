import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Pager from '.'

const StoryWrapper = (storyFn: () => React.FC) => (
  <div style={ {
    padding: '30px'
  } }>
    { storyFn() }
  </div>
)

storiesOf(`organisms|Pager`, module)
  .addDecorator(StoryWrapper)
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
  .add('current is 5, max is 10',
    () => <Pager
      current={ 5 }
      max={ 10 }
    />,
    {
      info: `
        current is 5, max is 10
      `
    })
  .add('current is 10, max is 10',
    () => <Pager
      current={ 10 }
      max={ 10 }
    />,
    {
      info: `
        current is 10, max is 10
      `
    })