import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Blog, { Props } from '.'

const dummy: Props = {
  title: 'title',
  mainImage: {
    aspectRatio: 1.4,
    src: 'https://dummyimage.com/860x470/f1f1f1/999999',
    srcSet: 'https://dummyimage.com/860x470/f1f1f1/999999',
    sizes: '350px',
    srcWebp: 'https://dummyimage.com/860x470/f1f1f1/999999',
  },
  createdAt: 'createdAt',
  html: `
    <h2>title</h2>
    <p>text text text text text </p>
    <h2>title</h2>
    <p>text text text text text </p>
    <ul>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
    </ul>
    <ol>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
    </ol>
    <p><a href="/" target="_blank">link</a></p>
  `,
}

storiesOf(`templates|Blog`, module)
  .add('default',
    () => <Blog
      title={ dummy.title }
      mainImage={ dummy.mainImage }
      createdAt={ dummy.createdAt }
      html={ dummy.html }
    />,
    {
      info: `
        default
      `
    })