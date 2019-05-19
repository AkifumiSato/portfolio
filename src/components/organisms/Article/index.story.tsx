import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from '../../../styles/global'
import Article from './index'

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

storiesOf(`organisms|Article`, module)
  .addDecorator(StoryWrapper)
  .add('article html',
    withInfo(`
    Blogの記事にstyleを適用するComponentです。
    `)(() =>
      <Article
        dangerouslySetInnerHTML={ {
          __html: `
            <html lang="ja">
            <body>
              <h2>h2 title</h2>
              <h3>h3 title</h3>
              <p>paragraph</p>
              <ul>
                <li>list item</li>
                <li>list item</li>
              </ul>
              <ol>
                <li>list item</li>
                <li>list item</li>
              </ol>
              <p><a href="#">link</a></p>
            </body>
            </html>
            `,
        } }/>
    ))
