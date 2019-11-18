import { createStore } from 'redux'
import { combineReducers } from 'redux'
import user from './modules/app/user'
import form from './modules/ui/form'
import { composeWithDevTools } from 'redux-devtools-extension'

const app = combineReducers({ user })
const ui = combineReducers({ form })

const root = combineReducers({
  app,
  ui,
})

const store = createStore(
  root,
  composeWithDevTools(),
)

export default store

export type IState = ReturnType<typeof root>
