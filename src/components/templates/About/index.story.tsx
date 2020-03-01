import { storiesOf } from '@storybook/react'
import * as React from 'react'
import About, { Props } from '.'

const dummy: Props = {
  posts: [
    {
      node: {
        type: 'heading-2',
        contents: 'h2 title',
      },
    },
    {
      node: {
        type: 'paragraph',
        contents: 'paragraph paragraph paragraph paragraph',
      },
    },
    {
      node: {
        type: 'heading-2',
        contents: 'h2 title',
      },
    },
    {
      node: {
        type: 'paragraph',
        contents: 'paragraph paragraph paragraph paragraph',
      },
    },
  ]
}

storiesOf(`templates|About`, module)
  .add('default',
    () => <About posts={ dummy.posts } />,
    {
      info: `
        default
      `
    })