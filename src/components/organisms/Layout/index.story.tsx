import * as React from 'react';
import { storiesOf } from '@storybook/react';
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
  <div style={{
    padding: '30px'
  }}>
    <GlobalStyles />
    <InjectionStyle />
    { storyFn() }
  </div>
)

storiesOf(`organisms|${Layout.name}`, module)
  .addDecorator(StoryWrapper)
  .add('default',
    withInfo(`
    共通のlayoutを適用するComponentです。
    `)(() =>
      <Layout />
    ))
  .add('root',
    withInfo(`
    共通のlayoutを適用するComponentです。
    `)(() =>
      <Layout rootLinkDisplay={ false }>
      </Layout>
    ))
