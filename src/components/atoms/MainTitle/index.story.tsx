import * as React from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf(`atom|${MainTitle.name}`, module)
  .addDecorator(StoryWrapper)
  .add('Single Title',
    withInfo(`
    上位の階層のタイトルに使用します。
    `)(() =>
      <MainTitle title="Single Title" />
    ))
  .add('Multi Title',
    withInfo(`
    下位の階層のタイトルに使用します。
    `)(() =>
      <MainTitle title="Multi Title" category="BLOG" />
    ))
