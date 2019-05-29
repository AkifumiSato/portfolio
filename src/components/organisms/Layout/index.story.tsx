import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from '../../../styles/global'
import Layout from './index'

const InjectionStyle = createGlobalStyle`
  body {
    background: transparent;
  }
`

const StoryWrapper = (storyFn: () => React.FC) => (
  <div style={ {
    padding: '30px'
  } }>
    <GlobalStyles />
    <InjectionStyle />
    { storyFn() }
  </div>
)

storiesOf(`organisms|${ Layout.name }`, module)
  .addDecorator(withInfo)
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
