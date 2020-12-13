import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Layout from './index'

storiesOf(`organisms|${Layout.name}`, module)
  .add('no title', () => <Layout />)
  .add('title', () => <Layout title="title" />)
  .add('detail', () => <Layout page="detail" title="detail title" />)
