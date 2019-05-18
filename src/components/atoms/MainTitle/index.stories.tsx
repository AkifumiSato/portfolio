import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import MainTitle from './index'

storiesOf(MainTitle.name, module)
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
