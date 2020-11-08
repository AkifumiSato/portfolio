import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Navigation from '.'

storiesOf(`molecules|${Navigation.name}`, module).add(
  'default',
  () => <Navigation />,
  {
    info: `
        navigationのOverlayとリンクのセットです。
      `,
  }
)
