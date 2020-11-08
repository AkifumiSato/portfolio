import { storiesOf } from '@storybook/react'
import * as React from 'react'
import List, { BlogPost } from '.'

const dummy: BlogPost[] = [
  {
    slug: 'slug',
    createdAt: 'createdAt',
    title: 'title',
    description: 'description',
    heroImage: {
      fixed: {
        width: 200,
        height: 120,
        src: 'https://dummyimage.com/200x120/f1f1f1/999999',
        srcSet: 'https://dummyimage.com/200x120/f1f1f1/999999',
        srcWebp: 'https://dummyimage.com/200x120/f1f1f1/999999',
      },
    },
  },
  {
    slug: 'slug',
    createdAt: 'createdAt',
    title: 'title',
    description: 'description',
    heroImage: {
      fixed: {
        width: 200,
        height: 120,
        src: 'https://dummyimage.com/200x120/f1f1f1/999999',
        srcSet: 'https://dummyimage.com/200x120/f1f1f1/999999',
        srcWebp: 'https://dummyimage.com/200x120/f1f1f1/999999',
      },
    },
  },
  {
    slug: 'slug',
    createdAt: 'createdAt',
    title: 'title',
    description: 'description',
    heroImage: {
      fixed: {
        width: 200,
        height: 120,
        src: 'https://dummyimage.com/200x120/f1f1f1/999999',
        srcSet: 'https://dummyimage.com/200x120/f1f1f1/999999',
        srcWebp: 'https://dummyimage.com/200x120/f1f1f1/999999',
      },
    },
  },
]

storiesOf(`templates|List`, module).add(
  'default',
  () => <List currentPage={1} pageCount={3} baseUrl="/blog/" posts={dummy} />,
  {
    info: `
        default
      `,
  }
)
