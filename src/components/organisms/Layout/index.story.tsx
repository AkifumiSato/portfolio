import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Layout from '.'

const StoryWrapper = (storyFn: () => React.FC) => (
  <div style={ {
    padding: '30px'
  } }>
    { storyFn() }
  </div>
)

storiesOf(`organisms|${ Layout.name }`, module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => <Layout />,
    {
      info: `
        共通のlayoutを適用するComponentです。
      `
    })
  .add(
    'root',
    () => <Layout rootLinkDisplay={ false } />,
    {
      info: `
        共通のlayoutを適用するComponentです。
      `
    })
