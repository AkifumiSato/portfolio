import { createStore, compose, StoreEnhancer } from 'redux'
import rootReducer  from './rootReducer'

interface IWindow {
  devToolsExtension: boolean
  __REDUX_DEVTOOLS_EXTENSION__(): StoreEnhancer
}

declare var window: IWindow

const windowGlobal = typeof window !== 'undefined' && window

const composeEnhancers =
  windowGlobal.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose

const store = () => createStore(
  rootReducer,
  composeEnhancers,
)

export default store()
