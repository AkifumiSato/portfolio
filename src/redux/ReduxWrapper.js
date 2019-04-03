import React from 'react'
import { Provider } from 'react-redux'
import { createStore as reduxCreateStore, compose } from 'redux'
import rootReducer from './rootReducer'

const windowGlobal = typeof window !== 'undefined' && window

const devtools =
  process.env.NODE_ENV === 'development' && windowGlobal.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f

const createStore = () => reduxCreateStore(
  rootReducer,
  compose(
    devtools,
  ),
)
export default ({ element }) => (
  <Provider store={ createStore() }>{ element }</Provider>
)
