import * as React from 'react';
import { storiesOf } from '@storybook/react';
import MainTitle from '../src/components/atoms/MainTitle'

storiesOf('MainTitle', module)
  .add('test', () => <MainTitle title="test" />)
