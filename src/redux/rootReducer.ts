import { combineReducers } from 'redux'
import user from './modules/app/user'
import form from './modules/ui/form'

const app = combineReducers({ user })
const ui = combineReducers({ form })

const root = combineReducers({
  app,
  ui,
})

export default root

export type IState = ReturnType<typeof root>
