import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import FormError from './index'

storiesOf(FormError.name, module)
  .add('FormError',
    withInfo(`
    formパーツでエラーを表現するのに使用します。
    `)(() =>
      <FormError text="名前は必須です。" />
    ))
