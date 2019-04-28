import { combineReducers } from 'redux'
import user from './modules/app/user'
import form from './modules/ui/form'

const app = combineReducers({ user })
const ui = combineReducers({ form })

export default combineReducers({
  app,
  ui,
})
