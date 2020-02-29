import * as React from 'react'
import { GlobalStyles } from '../../../styles/global'

const CommonSetting = (Component: React.FC) => (props: any) => (
  <>
    <GlobalStyles />
    <Component { ...props } />
  </>
)

export default CommonSetting
