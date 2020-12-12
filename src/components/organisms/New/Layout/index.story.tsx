import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Layout from './index'

storiesOf(`organisms|${Layout.name}`, module)
  .add('default', () => <Layout />)
  .add('home', () => <Layout page="home" />)
  .add('detail', () => <Layout page="detail" />)
