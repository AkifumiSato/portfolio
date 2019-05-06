import { createStore as reduxCreateStore, compose } from 'redux'
import rootReducer  from './rootReducer'

interface IWindow {
  devToolsExtension: boolean
  __REDUX_DEVTOOLS_EXTENSION__(): Function
}

declare var window: IWindow

const windowGlobal = typeof window !== 'undefined' && window

const composeEnhancers =
  windowGlobal.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose

const store = () => reduxCreateStore(
  rootReducer,
  // @ts-ignore
  composeEnhancers,
)

export default store()
