import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { GlobalStyles } from '../../../styles/global'
import CustomInput from './index'

const StoryWrapper = (storyFn: () => React.FC) => (
  <div style={{
    padding: '30px'
  }}>
    <GlobalStyles />
    { storyFn() }
  </div>
)

storiesOf(`molecules|${CustomInput.name}`, module)
  .addDecorator(StoryWrapper)
  .add('default',
    withInfo(`
    defaultのinputです。typeはtextになっています。
    `)(() =>
      <CustomInput
        name="test"
        onBlur={action('onBlur')}
      />
    ))
