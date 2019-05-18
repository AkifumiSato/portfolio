import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { GlobalStyles } from '../../../styles/global'
import styled from 'styled-components'
import FormError from './index'

const MyText = styled.p`
  border: 1px solid #ccc;
  border-radius: 3px;
  -webkit-appearance: none;
  padding: 10px;
  width: 30%;
`
const StoryWrapper = (storyFn: () => React.FC) => (
  <div style={ {
    margin: '30px',
    position: 'relative'
  } }>
    <GlobalStyles />
    <MyText>sample</MyText>
    { storyFn() }
  </div>
)

storiesOf(FormError.name, module)
  .addDecorator(StoryWrapper)
  .add('FormError',
    withInfo(`
    formパーツでエラーを表現するのに使用します。
    `)(() =>
      <FormError text="名前は必須です。" />
    ))
