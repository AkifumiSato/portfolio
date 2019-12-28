import { storiesOf } from '@storybook/react'
import * as React from 'react'
import MainTitle from '.'

storiesOf(`atom|${ MainTitle.name }`, module)
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
