import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from '../../../styles/global'
import Navigation from './index'

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

storiesOf(`molecules|${ Navigation.name }`, module)
  .addDecorator(withInfo)
  .addDecorator(StoryWrapper)
  .add('default',
    () => <Navigation
      links={ [
        {
          name: 'about',
          url: '/about/',
        },
        {
          name: 'blog',
          url: '/blog/',
        },
        {
          name: 'contact',
          url: '/contact/',
        },
      ] }
    />,
    {
      info: `
        navigationのOverlayとリンクのセットです。
      `
    })
