import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import MainTitle from './index'

storiesOf(MainTitle.name, module)
  .addDecorator((story, context) => withInfo({
    text: `記事のメインタイトルなどに使用します。`
  })(story)(context))
  .add('Single Title',() => <MainTitle title="Single Title" />)
  .add('Multi Title',() => <MainTitle title="Single Title" category="BLOG" />)

