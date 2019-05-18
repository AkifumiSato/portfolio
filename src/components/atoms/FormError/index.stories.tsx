import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { GlobalStyles } from '../../../styles/global'
import styled from 'styled-components'
import FormError from './index'

const MyInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  -webkit-appearance: none;
  padding: 10px;
  width: 30%;
`

storiesOf(FormError.name, module)
  .add('FormError',
    withInfo(`
    formパーツでエラーを表現するのに使用します。
    `)(() =>
      <div style={{
        margin: '30px',
        position: 'relative'
      }}>
        <GlobalStyles />
        <MyInput value="sample" />
        <FormError text="名前は必須です。" />
      </div>
    ))
