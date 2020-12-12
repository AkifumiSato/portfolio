import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Article from '.'

storiesOf(`organisms|Article`, module)
  .addDecorator((storyFn) => (
    <div
      style={{
        padding: '30px',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('article html', () => (
    <Article
      dangerouslySetInnerHTML={{
        __html: `
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
<pre><code class="language-javascript">import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/organisms/layout'

export default ({ data }) =&gt; {
  return (
    &lt;Layout&gt;
      &lt;Helmet&gt;
        &lt;html lang="ja" /&gt;
        &lt;title&gt;site title&lt;/title&gt;
      &lt;/Helmet&gt;
    &lt;/Layout&gt;
  )
}
</code></pre>`,
      }}
    />
  ))