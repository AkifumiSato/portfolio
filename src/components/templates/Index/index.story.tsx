import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Index from '.'

storiesOf(`templates|Index`, module).add('article html', () => <Index />, {
  info: `
        site top
      `,
})
