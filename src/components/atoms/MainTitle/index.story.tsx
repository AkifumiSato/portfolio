import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from '../../../styles/global'
import MainTitle from './index'

const InjectionStyle = createGlobalStyle`
  body {
    background: transparent;
  }
`

const StoryWrapper = (storyFn: () => React.FC) => (
  <div>
    <GlobalStyles />
    <InjectionStyle />
    { storyFn() }
  </div>
)

storiesOf(`atom|${ MainTitle.name }`, module)
  .addDecorator(withInfo)
  .addDecorator(StoryWrapper)
  .add(
    'Single Title',
    () => <MainTitle title="Single Title" />,
    {
      info: `
        上位の階層のタイトルに使用します。
      `
    })
  .add(
    'Multi Title', () =>
      <MainTitle title="Multi Title" category="BLOG" />,
    {
      info: `
        下位の階層のタイトルに使用します。
      `
    })
