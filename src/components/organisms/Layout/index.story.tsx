import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Layout from '.'

storiesOf(`organisms|${Layout.name}`, module)
  .addDecorator((storyFn) => (
    <div
      style={{
        padding: '30px',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('default', () => <Layout />, {
    info: `
        共通のlayoutを適用するComponentです。
      `,
  })
  .add('root', () => <Layout />, {
    info: `
        共通のlayoutを適用するComponentです。
      `,
  })
