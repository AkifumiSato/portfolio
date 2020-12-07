import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'
import { GlobalStyles } from '../../../styles/global'
import FormError from './index'

const MyText = styled.p`
  border: 1px solid #ccc;
  border-radius: 3px;
  -webkit-appearance: none;
  padding: 10px;
  width: 30%;
`

storiesOf(`atom|${FormError.name}`, module)
  .addDecorator((storyFn) => (
    <div
      style={{
        margin: '30px',
        position: 'relative',
      }}
    >
      <GlobalStyles />
      <MyText>sample</MyText>
      {storyFn()}
    </div>
  ))
  .add('FormError', () => <FormError text="名前は必須です。" />)
